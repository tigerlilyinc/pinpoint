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
  };
  Bus.on("setTitle", function (title) {
    $("title").html("pinpoint.io - " + title);
  });
  return {
    initialize: initialize
  };
});

