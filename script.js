var todoList = {
  todos: [],
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
  },
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;

		for (var i = 0; i < totalTodos; i++ ) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }
    if (completedTodos === totalTodos) {
      for (var i = 0; i < totalTodos; i++ ) {
        this.todos[i].completed = false;
      }
    } else {
      for (var i = 0; i < totalTodos; i++ ) {
        this.todos[i].completed = true;
      }
    }
  }
};

var handlers = {
  displayTodos: function() {
    todoList.displayTodos();
  },
  toggleAll: function() {
    todoList.toggleAll();
    view.displayTodos();
  },
  addTodo: function() {
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
    view.displayTodos();
  },
  changeTodo: function() {
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
    view.displayTodos();
  },
  deleteTodo: function(position) {
    // var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
		// replaces getElementById, because ID no longer comes from input text box.
    todoList.deleteTodo(position);
    // deleteTodoPositionInput.value = '';

    view.displayTodos();
  },
  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
  }
};

var view = {
  displayTodos: function() {
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';
    for (var i = 0; i < todoList.todos.length; i++) {
      var todoLi = document.createElement('li');
      var todo = todoList.todos[i];
      var todoTextWithCompletion = '';

      if (todo.completed === true) {
        todoTextWithCompletion = '(x) ' + todo.todoText;
      } else {
        todoTextWithCompletion = '( ) ' + todo.todoText;
      }

			// Assigns each todoLi a unique ID based on the for loop index.
			todoLi.id = i;
      todoLi.textContent = todoTextWithCompletion;
			// Appends delete buttons to page using createDeleteButton method.
			todoLi.appendChild(this.createDeleteButton());
      todosUl.appendChild(todoLi);
    }
	},
		// New Delete button for each line item.
		createDeleteButton: function() {
			var deleteButton = document.createElement('button');
			deleteButton.textContent = 'Delete';
			deleteButton.className = 'deleteButton';
			return deleteButton;
  },
	// New method sets up event listeners.
	setUpEventListeners: function() {
		// New todosUl selects "ul" elements in the document for scrutiny.
		var todosUl = document.querySelector('ul');
		// New event listener runs delete function when the li button is pressed.
		todosUl.addEventListener('click', function(event) {
			// event.target.parentNode.id returns clicked ul element's associated ID.
			var elementClicked = event.target;
			// Delegation - single event listener responds to all clicks, but uses if
			// statement to verify if the click event occurred on a delete button.
			if (elementClicked.className === 'deleteButton') {
				handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
			}
		});
	}
};

// view handler setUpEventListeners
view.setUpEventListeners();
