define([
       'jquery',
       'underscore',
       'backbone',
       'text!templates/activity.html'
], function ($, _, Backbone, template) {
  var view = Backbone.View.extend({
    el: $('#content'),
    render: function () {
      this.$el.html(_.template(template));
    }
  });
  return view;
});

