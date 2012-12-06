define([
       'jquery',
       'underscore',
       'backbone',
       'bus',
       'models/session'
], function($, _, Backbone, Bus, Session) {
  var AppRouter = Backbone.Router.extend({
    routes: {
      'login': 'login',
      'logout': 'logout',

      'home': 'home',
      'matches': 'matches',
      'profile': 'profile',

      // Default
      '*default': 'default'
    },
    logout: function() {
      var that = this;
      $('.main').fadeOut(200, function() {
        Session.logout(function() {
          window.location = '#';
        });
      });
    },
    home: function() {
      Bus.trigger('setTitle', 'Home');
      require(['views/home'], function (View) {
        var view = new View;
        view.render();
      });
    },
    matches: function() {
      Bus.trigger('setTitle', 'Matches');
      require(['views/matches'], function (matchesView) {
        matchesView.render();
      });
    },
    profile: function() {
      Bus.trigger('setTitle', 'Profile');
      require(['views/profile'], function (View) {
        var view = new View;
        view.render();
      });
    },
    default: function() {
      console.log("default");
      if (Session.checkAuth()) {
        this.home();
      } else {
        window.location = "#";
      }
    }
  });

  var initialize = function() {
    var app_router = new AppRouter;
    Backbone.router = app_router;
  };
  Bus.on("setTitle", function (title) {
    $("title").html("pinpoint.io - " + title);
  });
  return {
    initialize: initialize
  };
});

