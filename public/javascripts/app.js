define([
       'jquery',
       'underscore',
       'backbone',
       'bus',
       'models/session',
       'router',
       'views/main',
       'views/login',
], function($, _, Backbone, Bus, Session, Router, MainView, LoginView) {
  var initialize = function() {
    var that = this;
    var mainView = new MainView;
    mainView.render();

    that.loginView = new LoginView;
    this.gotoLogin = function () {
      Bus.trigger('setTitle', "Login");
      if (!Session.checkAuth()) {
        that.loginView.setElement($("#content"));
        that.loginView.render();
      } else {
        window.location = '#';
      }
    };
    Bus.on('invalidSessionAuth', this.gotoLogin, this);

    Bus.on('validSessionAuth', function() {
      Backbone.history.start();
    }, this);

    Session.initialize({
      setUp: function(model) {
        console.log('validSessionAuth');
        Bus.trigger('validSessionAuth');
      },
      tearDown: function() {
        console.log('invalidSessionAuth');
        Bus.trigger('invalidSessionAuth');
      }
    });
    Session.check(function() {
      Router.initialize();
    });
  }

  return {
    initialize: initialize
  };
});

