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
      'submit .signup-form': 'createUserAndSignin',
      'click .signup_a': 'toggleSignIn'
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
    toggleSignIn: function () {
      var hid = this.$el.find('#sign-in').children('div :hidden');
      var vis = this.$el.find('#sign-in').children('div :visible');
      vis.hide();
      hid.fadeToggle("slow", "linear");
    },
    createUserAndSignin: function() {
      var name = this.$el.find('input[name=name]').val();
      var email = this.$el.find('input[name=s_email]').val();
      var password = this.$el.find('input[name=s_password]').val();
      var valid_email = ( email.search(/@/) > 0 )
      if(name && email && password) {
        var creds = {user: {name: name, email: email, password: password}};
        var user = new User(creds);
        user.save();
        var session = new Session;
        session.login(creds);
      } else if (!valid_email) {
        $('.signup-errors', this.el).hide().html(_.template(loginErrorsTemplate, {message: 'Please provide a valid email address.'})).slideDown(200);
      }
      else {
        $('.signup-errors', this.el).hide().html(_.template(loginErrorsTemplate, {message: 'You must provide a valid name, email and password.'})).slideDown(200);
      }
      return false;
    }
  });
  return loginView;
});

