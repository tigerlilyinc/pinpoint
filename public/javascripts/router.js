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

      'matches': 'matches',
      'explore': 'explore',
      'profile': 'profile',

      'info/developers': 'infoDevelopers',
      'info/companies': 'infoCompanies',

      // Default
      '*default': 'default'
    },
    login: function () {
      Bus.trigger('setTitle', "Login");
      var that = this;
      require(['views/login'], function (loginView) {
        if (!Session.checkAuth()) {
          loginView.render();
        } else {
          window.location = '#';
        }
      });
    },
    logout: function() {
      var that = this;
      $('.main').fadeOut(200, function() {
        Session.logout(function() {
          window.location = '#';
        });
      });
    },
    matches: function() {
      Bus.trigger('setTitle', 'Matches');
      require(['views/matches'], function (matchesView) {
        matchesView.render();
      });
    },
    explore: function() {
      Bus.trigger('setTitle', "Explore");
      require(['views/explore'], function (exploreView) {
        exploreView.render();
      });
    },
    profile: function() {
      Bus.trigger('setTitle', "Profile");
      require(['views/profile'], function (profileView) {
        profileView.render();
      });
    },
    infoDevelopers: function() {
      require(['views/info'], function (InfoView) {
        var infoView = new InfoView;
        infoView.render();
        infoView.show("developers");
      });
    },
    infoCompanies: function() {
      require(['views/info'], function (InfoView) {
        var infoView = new InfoView;
        infoView.render();
        infoView.show("companies");
      });
    },
    default: function() {
      if (Session.checkAuth()) {
        this.matches();
      } else {
        require(['views/info'], function (InfoView) {
          var infoView = new InfoView;
          infoView.render();
        });
      }
    }
  });

  var initialize = function(){
    var app_router = new AppRouter;
    Backbone.router = app_router;
    Backbone.history.start();
    setTimeout(function() {
      var fadeTime = 1000;
      $('#triCanvas').animate({"opacity": 0.25}, fadeTime);
      $('#body').fadeIn(fadeTime);
    }, 3 * 1000);
  };
  Bus.on("setTitle", function (title) {
    $("title").html("pinpoint.io - " + title);
  });
  return {
    initialize: initialize
  };
});

