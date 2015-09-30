var app = {};

var content;
var loginView;
var userView;
var taskCollection;
var taskModel;
var taskCollectionView;



$(function() { //when DOM is ready...

app.users = new UserCollection([
		{username:'Jennifer'},
		{username:'Jason'},
		{username:'Ty'}
]);

app.tasks = new TaskCollection([]);

app.gui = new GUI(
	app.users,
	app.tasks,
	"#app"
	)

});