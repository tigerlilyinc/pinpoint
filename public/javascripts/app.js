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
    window.pinpoint = {};

    Backbone.old_sync = Backbone.sync
    Backbone.sync = function(method, model, options) {
      var new_options =  _.extend({
        beforeSend: function(xhr) {
          var csrfToken = $('meta[name="csrf-token"]').attr('content');
          if (csrfToken) xhr.setRequestHeader('X-CSRF-Token', csrfToken);

          var authToken = $('meta[name="auth-token"]').attr('content');
          if (authToken) xhr.setRequestHeader('X-Auth-Token', authToken);
        }
      }, options)
      Backbone.old_sync(method, model, new_options);
    };

    var that = this;
    var mainView = new MainView;
    mainView.render();

    that.loginView = new LoginView;
    this.gotoLogin = function () {
      Bus.trigger('setTitle', "Login");
      that.loginView.setElement($("#content"));
      that.loginView.render();
    };
    Bus.on('invalidSessionAuth', this.gotoLogin, this);

    Bus.on('validSessionAuth', function() {
      try {
        Backbone.history.start()
      } catch(err) {
        Backbone.history.loadUrl()
      }
    }, this);

    var session = new Session;
    session.check(function() {
      Router.initialize();
    });
  }

  return {
    initialize: initialize
  };
});

