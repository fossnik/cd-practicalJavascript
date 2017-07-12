var todoList = {
  // instantiate blank array, rather than array of strings.
  todos: [],
  displayTodos: function() {
    console.log('My Todos', this.todos);
  },
  // Create and 'push()' Object in lieu of a String.
  // passed in "todoText" becomes a string property of the object.
  addTodo: function(todoText) {
    this.todos.push({
      // said object
      todoText: todoText,
      // new boolean property
      // object incomplete by default
      completed: false
    });
    this.displayTodos();
  },
  // changeTodos method
  changeTodo: function(position, newValue) {
    this.todos[position] = newValue;
    this.displayTodos();
  },
  // deleteTodos method
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  }
};
