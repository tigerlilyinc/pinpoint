define([
       'jquery',
       'underscore',
       'backbone',
       'text!templates/profile.html',
], function ($, _, Backbone, template) {
  var view = Backbone.View.extend({
    el: $('#content'),
    initialize: function() {
      _.bindAll(this, 'render');
    },
    render: function() {
      this.$el.html(_.template(template));
    },
  });
  return view;
});

