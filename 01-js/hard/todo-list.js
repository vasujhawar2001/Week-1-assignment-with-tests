/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  constructor(){
    this.todos = [];
  }

  add(todo) {
    this.todos.push(todo);
  }

  update(index, updatedTodo){
    if(index >= this.todos.length)
      return
    this.todos[index] = updatedTodo;
  }

  remove(index){
    this.todos.splice(index, 1);
  }

  getAll(){
    return this.todos;
  }

  get(index){
    if(index >= this.todos.length)
      return null;
    return this.todos[index];
  }

  clear(){
    this.todos = [];
  }
}

module.exports = Todo;
