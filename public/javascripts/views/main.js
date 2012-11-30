define([
       'jquery',
       'underscore',
       'backbone',
       'bus',
       'models/session',
       'text!templates/main.html'
], function ($, _, Backbone, Bus, Session, template) {
  var view = Backbone.View.extend({
    el: $('#body'),
    initialize: function() {
      Bus.on('validSessionAuth', this.loggedIn, this);
    },
    render: function () {
      this.$el.html(_.template(template));
    },
    logout: function() {
      Session.logout(function (data) {
        Backbone.router.navigate('#', {trigger: true});
      });
      return false;
    },
    loggedIn: function() {
      var menu = $("<div>LOGOUT</div>");
      menu.click(this.logout);
      $(this.el).find("#account-menu").html(menu);
    }
  });
  return view;
});

