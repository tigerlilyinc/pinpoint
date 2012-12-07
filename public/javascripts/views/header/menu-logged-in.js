define([
       'jquery',
       'underscore',
       'backbone',
       'bus',
       'models/session',
       'text!templates/header/menu-logged-in.html'
], function ($, _, Backbone, Bus, Session, template) {
  var view = Backbone.View.extend({
    el: $('#account-menu'),
    events: {
      "click #sign-out": "logout"
    },
    initialize: function() {
      Bus.on("validSessionAuth", this.render, this);
    },
    render: function () {
      this.setElement($(this.$el.selector)); // TODO: This shouldn't be needed
      this.$el.html(_.template(template));
    },
    logout: function() {
      var session = new Session;
      session.logout(function (data) {
        Backbone.router.navigate('#', {trigger: true});
      });
      return false;
    },
  });
  return view;
});

