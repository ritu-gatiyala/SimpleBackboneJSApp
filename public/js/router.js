define([
    'jquery',
    'underscore',
    'backbone',
    'text!users/templates/navbar.html',
    'text!users/templates/input.html'
], function($, _, Backbone,navbar,input) {
    var AppRouter = Backbone.Router.extend({
        routes: {
            'home': 'showHome',
            'users':'showUser',
            'test':'test',
            '*actions': 'showHome'
        }
    });

    var initialize = function() {
        $("#view").html(navbar);
        //var mainContent = "#mainContent";
        app_router = new AppRouter();//creating instance of class Backbone.Router
        app_router.on('route:showHome', function() {
           $('#mainContent').html('<p>Home</p>');
            $('#mainContent1').html(input)
        });
        app_router.on('route:showUser  ', function() {
           //$(mainContent).html('Users')


            require([
              'users/views/userView'
           ],function(UserView){
                //$('#mainContent5').html('<p>Home</p>');
              var userView=new UserView({el:'#mainContent'});
              //var test=new UserView({el:'#mainContent1'});
              //here adding another attribute el to object returned from UserView
                     })
        });
        app_router.on('route:test',function(){
              console.log('Yo, we are inside the test :D');
              // $('#mainContent').html('<p>Go Go Go.... :p');

          require([
            'users/views/userCollView'
            ],function(Test){
              //console.log(Test);
              var test= new Test({el:'#mainContent'});
              //console.log(test);
            });

        });
        Backbone.history.start();
    };
    return {
        initialize: initialize
    };
});
