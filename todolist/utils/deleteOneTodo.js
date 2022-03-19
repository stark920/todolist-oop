const checkID = require('./checkID');

const deleteOneTodo = (todo, id) => {
  const index = checkID(todo, id);
  if (index < 0) return false;
  todo.splice(index, 1);
  return todo;
};

module.exports = deleteOneTodo;
