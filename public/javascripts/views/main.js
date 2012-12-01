define([
       'jquery',
       'underscore',
       'backbone',
       'views/header/menu-logged-in',
       'views/header/menu-logged-out',
       'text!templates/main.html'
], function ($, _, Backbone, MenuLoggedInView, MenuLoggedOutView, template) {
  var view = Backbone.View.extend({
    el: $('#body'),
    initialize: function() {
      var menuLoggedInView = new MenuLoggedInView;
      var menuLoggedOutView = new MenuLoggedOutView;
    },
    render: function () {
      this.$el.html(_.template(template));
    }
  });
  return view;
});

