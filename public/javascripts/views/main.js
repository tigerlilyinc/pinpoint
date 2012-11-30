define([
       'jquery',
       'underscore',
       'backbone',
       'text!templates/main.html'
], function ($, _, Backbone, template) {
  var view = Backbone.View.extend({
    el: $('#body'),
    render: function () {
      this.$el.html(_.template(template));
    }
  });
  return view;
});

