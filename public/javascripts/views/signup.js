define([
       'jquery',
       'underscore',
       'backbone',
       'bus',
       'models/session',
       'text!templates/signup.html',
       'text!templates/signup_errors.html',
       'jquery_serialize'
], function ($, _, Backbone, Bus, Session, signupTemplate, signupErrorsTemplate) {
  var signupView = Backbone.View.extend({
    el: $('#content'),
    render: function () {
      $(this.el).html(_.template(signupTemplate));
    },
    events: {
      'submit .signup-form': 'signup'
    },
    login: function() {
      var that = this;
      var creds = {user: $('.login-form').serializeObject()};
      var session = new Session;
      session.login(creds, function (data) {
        if (!data.user) {
          $('.signup-errors', that.el).hide().html(_.template(loginErrorsTemplate, {message: 'Incorrect username/password.'})).slideDown(200);
        }
      });
      return false;
    },
  });
  return signupView;
});

