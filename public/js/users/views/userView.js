define([
   'jquery',
   'underscore',
   'backbone',
   'users/models/user',
   'text!users/templates/user.html'
],function($,_,Backbone,User,userHtml){
  //here UserView is a class & when it is returned in last line,it is returned as object containig key-value pairs
    var UserView=Backbone.View.extend({
         Temp:_.template(userHtml),
         initialize:function(){
             var self=this;
             this.user=new User();
             this.user.fetch();//fetch is a get request
             // this.user.fetch({//ajax call
             //      success:function(data){
             //         console.log(self.user.get('name'));
             //         //self.$el.html(user.get('name'));
             //         self.render();
             //      }
             //   });
             this.user.on('change',this.render,this);
             //setTimeout(function(){
                // console.log(self.user.get('name'));
                // self.user.set({name:'john',age:30,title:'User'});
                // console.log(self.user.get('name'));
                //self.user.unset('title');
             //},5000);
             //this.user.unset('role');//gives undefined
             //console.log(user.get('name'));
             //this.$el.html(user.get('name'));
          },       
           render:function(){
               this.$el.html(this.Temp(this.user.toJSON()));//passing data to template and printing to screen//toJSON here converts model to object so that we can refer using .
               if(this.user.has('title')){
                console.log('title is present!');
               }
              else{
                 console.log('No title');
              }
             }
           
     });
    return UserView;
});

//self.$el-->gives jquery reference as an array of DOM element,jquery functions can b applied,but not JS functions.
//self.el-->gives DOM element,JS functions can b applied but not jquery functions
