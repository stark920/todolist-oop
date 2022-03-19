const checkID = require('./checkID');
const checkObjectTitle = require('./checkObjectTitle');

const updateOneTodo = (todo, id, data) => {
  const index = checkID(todo, id);
  const checkedObj = checkObjectTitle(data);
  if (index > -1 && checkedObj) {
    todo[index].title = checkedObj.title;
    return todo;
  } else {
    return false;
  }
};

module.exports = updateOneTodo;
