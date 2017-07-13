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
  },
  // toggleAll - if all complete, set all incomplete, et vice versa.
  toggleAll: function() {
    // .length equates to the number of elements in todos array
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    // iterate over todos array..
    for (var i = 0; i < totalTodos; i++ ) {
      // and tally all todos Objects with affirmative .completed property.
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }
    // Case 1 - all True to all False
    // if there exist as many completed todos as the sum total of all todos..
    if (completedTodos === totalTodos) {
      // then loop through array, and let all todo .completed equal false..
      for (var i = 0; i < totalTodos; i++ ) {
        this.todos[i].completed = false;
      }
    // otherwise,
    } else {
    // Case 2 - loop through array, and let all todo .completed equal true.
      for (var i = 0; i < totalTodos; i++ ) {
        this.todos[i].completed = true;
      }
    }
    this.displayTodos();
  }
};

// Access to the displaytodos button via ID through DOM
var displayTodosButton = document.getElementById('displayTodosButton');
// Access to the toggle all button via ID
var toggleAllButton = document.getElementById('toggleAllButton');

// A DOM event listener to execute displayTodos method on click of the button
displayTodosButton.addEventListener('click', function() {
  todoList.displayTodos();
});

// A DOM event listener to execute toggleAll method on click of the button
toggleAllButton.addEventListener('click', function() {
  todoList.toggleAll();
});
