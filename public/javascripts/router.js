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
      'home': 'home',
      'matches': 'matches',
      'activity': 'activity',
      'profile': 'profile',

      // Default
      '*default': 'default'
    },
    initialize: function(options) {
      this.mainView = options.mainView;
    },
    home: function() {
      var that = this;
      Bus.trigger('setTitle', 'Home');
      require(['views/home'], function (View) {
        var view = new View;
        that.mainView.showView(view);
      });
    },
    matches: function() {
      var that = this;
      Bus.trigger('setTitle', 'Matches');
      require(['views/matches'], function (View) {
        var view = new View;
        that.mainView.showView(view);
      });
    },
    activity: function() {
      var that = this;
      Bus.trigger('setTitle', 'Activity');
      require(['views/activity'], function (View) {
        var view = new View;
        that.mainView.showView(view);
      });
    },
    profile: function() {
      var that = this;
      Bus.trigger('setTitle', 'Profile');
      require(['views/profile'], function (View) {
        var view = new View;
        that.mainView.showView(view);
      });
    },
    default: function() {
      console.log("default");
      var session = new Session;
      if (session.checkAuth()) {
        this.home();
      } else {
        window.location = "#";
      }
    }
  });

  var initialize = function(options) {
    var app_router = new AppRouter(options);
    Backbone.router = app_router;
  };
  Bus.on("setTitle", function (title) {
    $("title").html("pinpoint.io - " + title);
  });
  return {
    initialize: initialize
  };
});

