define([
  'backbone',
  'users/models/user'
],function(Backbone,User){
    var UserCollection=Backbone.Collection.extend({
        model:User,
        url:'data/users.json'
   });
    return UserCollection;
});
