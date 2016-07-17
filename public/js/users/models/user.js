define([
'backbone'
],function(Backbone){
var User=Backbone.Model.extend({
  defaults:{
           name:'',
           age:25,
           role:'',
           image:''
     },
  url:'data/user.json'
});
   return User;
}); 
//var user=new User({'name':'some name'});
//user.set('des','');
//user.fetch();//will make ajax call to above specified url
