var todoList = {
  todos: [],
  // displayTodos method
  displayTodos: function() {
    if (this.todos.length === 0) {
      // Notify of zerolength todo array, otherwise proceed.
      console.log("Your todo list is empty!")
    } else {
      // Prints "My Todos" header.
      console.log('My Todos');
      // NEW: loop through each object in todos[] array.
      for (var i = 0; i < this.todos.length; i++) {
        // verify .completed is true
        if (this.todos[i].completed === true) {
          // if true: print .todoText with a check
          console.log('(x)', this.todos[i].todoText);
        } else {
          // otherwise: print .todoText without a check
          console.log('( )', this.todos[i].todoText);
        }
    }
  },
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
