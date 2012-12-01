define([
       'jquery',
       'underscore',
       'backbone',
       'bus',
       'text!templates/header/menu-logged-out.html'
], function ($, _, Backbone, Bus, template) {
  var view = Backbone.View.extend({
    el: $('#account-menu'),
    initialize: function() {
      Bus.on("invalidSessionAuth", this.render, this);
    },
    render: function () {
      this.setElement($(this.$el.selector)); // TODO: This shouldn't be needed
      this.$el.html(_.template(template));
    }
  });
  return view;
});

