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
		<form class="form-inline formStyle" onsubmit="app.controllers.todoController.addTodoFromForm(event)">
		<p>${todos.length} to do</p>
		`
		//DONT FORGET TO LOOP
		for(var i=0;i<todos.length;i++){
			var todo = todos[i]
			var check = todo.completed ? 'checked' : ''
			var visi = todo.completed ? 'visible' : 'hidden' 
			template+=`
			<input name="${todo._id}" type="checkbox" onchange="app.controllers.todoController.toggleTodoStatus('${todo._id}')" ${check}>
			<label for="${todo._id}">${todo.description}   <span onclick="app.controllers.todoController.removeTodo('${todo._id}')" style="visibility: ${visi};">[X]</span></label><br>
			`
		}
		// <span id="${todo.completed}" style="visibility:hidden;">[X]</span>
		template+='<input type="text" name="newTodo" placeholder="New ToDo"></form>'
		document.getElementById('todo').innerHTML=template
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
