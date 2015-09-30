var GUI = (function(){ //IIFE for all Views

// Login View -------------------------------------------------

var LoginView = Backbone.View.extend({
render : function (){
	console.log("render login");
	var login = '<button id="login" type="submit">Login</button>';
	var usrBtn = '<br><br><button id="newName">Create User</button>';
	var input = '<br><br><input type="text" id="userField" placeholder="Add New User Name">';
	var headline = '<h1 class="main-heading">To Do List</h1>';
	var headline2 = '<h2>Please log in.</h2>';
	var nametag = "<p class='nametag'>name:</p>";
	var selector = this.userSelector();
	this.$el.html("<br><div id='login-area'>" + headline + headline2 + nametag + selector + login + input + usrBtn + "</div>");
	// this.el.append(this.$el);
},
userSelector: function(){
	var userArr = [];
	content = "";

	for (var i = 0; i < app.users.length; i++){
		userArr.push(app.users.models[i].attributes.username);
		content+=("<option>"+userArr[i]+"</option>");

  	}
	content = "<select id='selectDropdown'>"+content+"</select>";
	return content;
},

addNewUser: function(){
	var newUser = $("#userField").val();
	app.users.add({username: newUser});
	this.render();
},

events: {
	"click #login" 		: "userLogin",
	"click #newName"	: "addNewUser"
},


userLogin : function(){
	this.remove();
	var selectedUser = $("#selectDropdown").val();
	var userModel = app.users.where({username: selectedUser})[0];
	 console.log(userModel);
	userView = new UserView({model: userModel, collection: taskCollection});
	userView.render();
	//this.model.get(username)
	}

});





// User View -----------------------------------------------

var UserView = Backbone.View.extend({
	render: function (){
	console.log(this.model);

var greeting= "<h1> Hello, "+ this.model.get('username') +" !!</h1>";
var currentTasks = '<div id="currentTasks"><h2> Here are your current tasks: </h2><br><li>Get Better At This!</li></div>';
var createBtn = '<button id="createTask">Create New Task</button>';

var logoutBtn = '<button id="logout">Logout</button>';
var taskBtn = '<br><br><button id="addTask" type="submit" style="display: none">Add Task</button>';
var showAll = '<br><br><button id="showAll">Show All Tasks</button>';
var input = '<br><textarea type="text" id="taskDescription" style="display: none" value="Enter Task Description"></textarea>';
this.$el.html("<div id='userview'>"+greeting+ currentTasks +createBtn +input + taskBtn + showAll + logoutBtn +"</div>");
$('#app').append(this.el);

console.log('user works!',this.el);

},

initialize: function(){
	console.log("USER VIEW INITIALIZING!!!!!", this.initialize);
	this.model.on("change", this.render, this);
},

events:  {
	"click #createTask" : "addDescription",
	"click #addTask" : "taskAdder",
	"click #logout" : "logoutUser"

},
addDescription : function(){
	$("#addTask").show();
    $("#taskDescription").show();

},

taskAdder : function(){
	console.log("I AM WORKING!");
	var newTaskDescription = $("#taskDescription").val();
	var model = new TaskModel({description: newTaskDescription});
	this.collection.add(model); //eventually will be 'create' once server is set up
	this.makeView(model);
	$('#taskDescription').val('');
	$('#taskDescription').hide();
    $('#addTask').hide();
},

makeView : function(newModel){
var newView = new TaskView({model: newModel});
  this.$el.append(newView.$el);



},

logoutUser : function(){
	$("#userview").hide();
	$("#login-area").show();
}

});


// Task View ----------------------------------------------------

var TaskView = Backbone.View.extend({
  render : function(){

	console.log("TASK VIEW IS RENDERING");

	// var greeting= "<h1> Greetings, "+ this.model.get('username') +" !!</h1>";
	var taskTitle = '<div id="currentTasks"><h2> The task below has been saved! </h2></div>';
	var taskItem = this.model.get('description');
	var claimBtn = "<button id='claim'>Claim Task</button>"
	var assignBtn = "<button id='claim'>Assign Task</button>"
	var returnBtn = '<br><br><button id="homePage">Return to Homepage</button>';

	var input = '<br><div id="taskList"></div>';

	this.$el.html("<div id='taskview'>"+ taskTitle + taskItem + claimBtn + assignBtn + returnBtn + input +"</div>");

	console.log('TASKS HAS BEEN ADDED!',this.el);
},

  initialize : function(){
    this.render();

  },

  events : {
     "click button" : "returnHome"

  },

   returnHome : function(){
    	$("#taskview").remove();

    	// $("#login-area").show();
    }
});


// generic ctor to represent interface:
function GUI(users,tasks,el) {
// 	// users is collection of User models
// 	// tasks is collection of Task models
// 	// el is selector for where GUI connects in DOM
loginView = new LoginView({el:"#app"});
loginView.render();
// 	//...
 }

return GUI;
}());






























// var GUI = (function(){ //IIFE for all Views

// var TaskView = Backbone.View.extend({

// });

// var CreateTaskView = Backbone.View.extend({

// });

// var UnassignedTasksView = Backbone.View.extend({

// });

// var UserTasksView = Backbone.View.extend({

// });

// var UserView = Backbone.View.extend({

// });

// var LoginView = Backbone.View.extend({

// });


// generic ctor to represent interface:
// function GUI(users,tasks,el) {
// 	// users is collection of User models
// 	// tasks is collection of Task models
// 	// el is selector for where GUI connects in DOM

// 	//...
// }

// return GUI;
// }())
