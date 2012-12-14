define([
       'jquery',
       'underscore',
       'backbone',
       'bus',
       'models/session',
       'models/user',
       'text!templates/login.html',
       'text!templates/login_errors.html',
       'jquery_serialize'
], function ($, _, Backbone, Bus, Session, User, loginTemplate, loginErrorsTemplate) {
  var loginView = Backbone.View.extend({
    el: $('#content'),
    render: function () {
      $(this.el).html(_.template(loginTemplate));
    },
    events: {
      'submit .login-form': 'login',
      'submit .signup-form': 'createUser'
    },
    login: function() {
      var that = this;
      var creds = {user: $('.login-form').serializeObject()};
      var session = new Session;
      session.login(creds, function (data) {
        if (!data.user) {
          $('.login-errors', that.el).hide().html(_.template(loginErrorsTemplate, {message: 'Incorrect username/password.'})).slideDown(200);
        }
      });
      return false;
    },
    createUser: function(e) {
      e.preventDefault();
      var name = this.$el.find('.signup-form input[name=name]').val();
      var email = this.$el.find('.signup-form input[name=email]').val();
      var password = this.$el.find('.signup-form input[name=password]').val();
      var user = new User({ user: { name: name, email: email, password: password}});
      user.save();
      return false;
    }

  });
  return loginView;
});

