var todoList = {
  // instantiate an object, rather than array of strings.
  todos: [],
  // displayTodos method
  displayTodos: function() {
    console.log('My Todos', this.todos);
  },
  // Create and 'push()' Object in lieu of a String.
  // passed in "todoText" becomes a string property of the object.
  addTodo: function(todoText) {
    this.todos.push({
      // text property of the object
      todoText: todoText,
      // new boolean property
      // object incomplete by default
      completed: false
    });
    this.displayTodos();
  },
  // changeTodos method
  changeTodo: function(position, todoText) {
    // added ".todoText" dot notation to specify just the text sub-property
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  // deleteTodos method
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  // toggleCompleted - implements the new boolean property.
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    // flips to the opposite, because of bang operator.
    todo.completed = !todo.completed;
    this.displayTodos();
  }
};
