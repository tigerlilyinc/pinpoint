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
    createUser: function() {
       var name = this.$el.find('input[name=name]').val();
       var email = this.$el.find('input[name=email]').val();
       var password = this.$el.find('input[name=password]').val();
       var user = new User({ name: name, email: email, password: password});
       user.save();
      return false;
    }
  });
  return signupView;
});

