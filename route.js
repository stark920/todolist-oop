const Todolist = require('./todolist/todolist');
const { successHandle, errorHandle } = require('./resHandle');

const todo = new Todolist();

const requestListener = (req, res) => {
  let body = '';

  req.on('data', (chunk) => {
    body += chunk;
  });

  if (req.url == '/todos' && req.method == 'GET') {
    successHandle(res, todo.getAll());
  } else if (req.url == '/todos' && req.method == 'POST') {
    req.on('end', () => {
      const data = todo.insertOne(body);
      data ? successHandle(res, data) : errorHandle(res, 400);
    });
  } else if (req.url == '/todos' && req.method == 'DELETE') {
    successHandle(res, todo.deleteAll());
  } else if (req.url.startsWith('/todos/') && req.method == 'DELETE') {
    const id = req.url.split('/').pop();
    const data = todo.deleteOne(id);
    data ? successHandle(res, data) : errorHandle(res, 400);
  } else if (req.url.startsWith('/todos/') && req.method == 'PATCH') {
    req.on('end', () => {
      const id = req.url.split('/').pop();
      const data = todo.updateOne(id, body);
      data ? successHandle(res, data) : errorHandle(res, 400);
    });
  } else if (req.method == 'OPTIONS') {
    successHandle(res);
  } else {
    errorHandle(res, 400);
  }
};

module.exports = requestListener;
