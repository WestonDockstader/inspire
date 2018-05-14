function TodoController() {
	// new up the TodoService that has already been configured for your use
	// You will need four methods
	// getTodos should request your api/todos and give an array of todos to your callback fn
	// addTodo takes in a todo and posts it to the server
	// toggleTodoStatus takes in a todo marks its status as completed and puts it to the server
	// removeTodo takes in a todoId and sends a delete request to the server
	// **** HINT: Everytime you make a change to any todo don't forget to get the todo list again
	var todoService = new TodoService()

	// Use this getTodos function as your callback for all other edits
	function getTodos(){
		//FYI DONT EDIT ME :)
		todoService.getTodos(draw)
	}

	function draw(todos) {
		//WHAT IS MY PURPOSE?
		//BUILD YOUR TODO TEMPLATE HERE
		
		var template = `
		<form class="form-inline d-flex flex-column align-items-start formStyle" onsubmit="app.controllers.todoController.addTodoFromForm(event)">
		<div class="form-group"><p class="todo-style"><span id="todo-count">0</span> to do</p></div>
		`
		//DONT FORGET TO LOOP
		for(var i=0;i<todos.length;i++){
			var todo = todos[i]
			var check = todo.completed ? 'checked' : ''
			var visi = todo.completed ? 'visible' : 'hidden' 
			template+=`
			<div class="form-group justifly-content-between todo-style">
				<input name="${todo._id}" type="checkbox" onchange="app.controllers.todoController.toggleTodoStatus('${todo._id}')" ${check}>
				<label for="${todo._id}">${todo.description}</label>
				<span onclick="app.controllers.todoController.removeTodo('${todo._id}')" style="visibility: ${visi};">  [X]</span>
			</div>
			`
		}
		template+=`<div class="d-flex d-inline-block">
								<input type="text" name="newTodo" placeholder="New ToDo">
							</div>
						</form>`
		document.getElementById('todo').innerHTML=template
		document.getElementById('todo-count').innerHTML=todos.length
	}
	
	this.addTodoFromForm = function (e) {
		e.preventDefault() // <-- hey this time its a freebie don't forget this
		// TAKE THE INFORMATION FORM THE FORM
		var form = e.target.newTodo.value
		var todo = {
			description: form
		}

		//PASSES THE NEW TODO TO YOUR SERVICE
		//DON'T FORGET TO REDRAW THE SCREEN WITH THE NEW TODO
		//YOU SHOULDN'T NEED TO CHANGE THIS
		todoService.addTodo(todo, getTodos)
		                         //^^^^^^^ EXAMPLE OF HOW TO GET YOUR TOODOS AFTER AN EDIT
	}

	this.toggleTodoStatus = function (todoId) {
		// asks the service to edit the todo status
		todoService.toggleTodoStatus(todoId, getTodos)
		// YEP THATS IT FOR ME
	}

	this.removeTodo = function (todoId) {
		// ask the service to run the remove todo with this id
		todoService.removeTodo(todoId, getTodos)
		// ^^^^ THIS LINE OF CODE PROBABLY LOOKS VERY SIMILAR TO THE toggleTodoStatus
	}
	getTodos();
	// IF YOU WANT YOUR TODO LIST TO DRAW WHEN THE PAGE FIRST LOADS WHAT SHOULD YOU CALL HERE???

}
