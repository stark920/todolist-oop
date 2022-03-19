const { v4: uuidv4 } = require('uuid');
const checkObjectTitle = require('./checkObjectTitle');

const insertOneTodo = (todo, data) => {
  const checkedObj = checkObjectTitle(data);

  if (!checkedObj) return false;

  checkedObj.id = uuidv4();
  todo.push(checkedObj);
  return todo;
};

module.exports = insertOneTodo;
