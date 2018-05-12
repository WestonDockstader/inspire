function TodoService() {
	// A local copy of your todos
	var todoList = []
	var baseUrl = 'https://bcw-sandbox.herokuapp.com/api/Weston/todos'

	function logError(err) {
		console.error('UMM SOMETHING BROKE: ', err)
		//CAN YOU NOTIFY THE USER IF SOMETHING BREAKS? 
		//do this without breaking the controller/service responsibilities
	}

	this.getTodos = function (cb) {
		//@ts-ignore
		$.get(baseUrl)
			.then(function (res) { // <-- WHY IS THIS IMPORTANT????
				todoList=res.data
				console.log(todoList)
				//console.log(res.data)
				cb(res.data)
			})
			.fail(logError)
	}

	this.addTodo = function (todo, cb) {
		// WHAT IS THIS FOR???
		//@ts-ignore
		$.post(baseUrl, todo)
			.then(function(res){ // <-- WHAT DO YOU DO AFTER CREATING A NEW TODO?
				//console.log(res.data)
				cb()
			}) 
			.fail(logError)
	}

	this.toggleTodoStatus = function (todoId,cb) {
		// MAKE SURE WE THINK THIS ONE THROUGH
		//STEP 1: Find the todo by its index **HINT** todoList
		var currentTodo={}
		for(var i=0;i<todoList.length;i++){
			var id = todoList[i]._id
			if(todoId==id){
				currentTodo=todoList[i]
			}
		}
		//STEP 2: Change the completed flag to the opposite of what is is **HINT** todo.completed = !todo.completed
		currentTodo.completed = !currentTodo.completed
		//STEP 3: Here is that weird Ajax request because $.put doesn't exist
		//@ts-ignore
		$.ajax({
			method: 'PUT',
			contentType: 'application/json',
			url: baseUrl + '/' + todoId,
			data: JSON.stringify(currentTodo)
		})
			.then(function (res) {
				console.log(res)//DO YOU WANT TO DO ANYTHING WITH THIS?
				cb()
			})
			.fail(logError)
	}

	this.removeTodo = function (todoId, cb) {
		// Umm this one is on you to write.... It's also unique, like the ajax call above. The method is a DELETE
		//@ts-ignore
		$.ajax({
			method: 'DELETE',
			contentType: 'application/json',
			url: baseUrl + '/' + todoId
		}).then(cb).fail(logError)
	}

}
