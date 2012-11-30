define([
       'jquery',
       'underscore',
       'backbone',
       'bus',
       'models/session',
       'text!templates/login.html',
       'jquery_serialize'
], function ($, _, Backbone, Bus, Session, loginTemplate) {
  var loginView = Backbone.View.extend({
    el: $('#content'),
    render: function () {
      this.$el.html(_.template(loginTemplate));
    },
    events: {
      'submit .login-form': 'login'
    },
    login: function() {
      var that = this;
      var creds = $('.login-form').serializeObject();
      Session.login(creds, function (data) {
        if (!data.user) {
          $('.login-errors', that.el).hide().html(_.template(loginErrorsTemplate, {message: 'Incorrect username/password.'})).slideDown(200);
        }
      });
      return false;
    }
  });
  return new loginView;
});

