const getAllTodo = require('./utils/getAllTodo');
const deleteAllTodo = require('./utils/deleteAllTodo');
const insertOneTodo = require('./utils/insertOneTodo');
const deleteOneTodo = require('./utils/deleteOneTodo');
const updateOneTodo = require('./utils/updateOneTodo');

class Todolist {
  constructor() {
    this._todo = [];
  }

  getAll() {
    return getAllTodo(this._todo);
  }
  deleteAll() {
    return deleteAllTodo(this._todo);
  }
  insertOne(data) {
    return insertOneTodo(this._todo, data);
  }
  deleteOne(id) {
    return deleteOneTodo(this._todo, id);
  }
  updateOne(id, data) {
    return updateOneTodo(this._todo, id, data);
  }
}

module.exports = Todolist;
