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
    },
    showView: function(view) {
      if (this.currentView) {
        this.currentView.unbind();
        this.currentView.undelegateEvents();
        if (this.currentView.onClose) {
          this.currentView.onClose();
        }
        this.currentView.$el.empty();
      }
      this.currentView = view;
      this.currentView.render();
    }
  });
  return view;
});

