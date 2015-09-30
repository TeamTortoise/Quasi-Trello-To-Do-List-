

// Task Model --------------------------------------------

var TaskModel = Backbone.Model.extend({
  defaults: {
    title:'',
    description:'',
    creator:'',
    assignee:'',
    status:'unassigned'
  }
  // Add methods if needed...
})

taskModel = new TaskModel();

// User Model --------------------------------------------

var UserModel = Backbone.Model.extend({
  defaults: {
    username:'Jennifer',
    username:'Ty',
    username:'Jason'
  }
})


userModel = new UserModel({title:'Make this page work!',
                           description: 'Fix all the code!',
                           creator: app.users});

// Task Collection -----------------------------------------

var TaskCollection = Backbone.Collection.extend(
{
    model :TaskModel, 

    url: "/tasks",

    initialize: function () {
      console.log('I AM ADDED!');
    }

});

taskCollection = new TaskCollection();

taskCollection.add(taskModel)


// User Collection -----------------------------------------

var UserCollection = Backbone.Collection.extend({

  model: UserModel, 

  url: "/users"


});


