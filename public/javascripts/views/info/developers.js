define([
       'jquery',
       'underscore',
       'backbone',
       'text!templates/info/developers.html'
], function($, _, Backbone, template) {
  var view = Backbone.View.extend({
    el: $(".info-content"),
    render: function() {
      this.$el.html(_.template(template));
      this.$el.fadeIn();
    }
  });
  return view;
});

