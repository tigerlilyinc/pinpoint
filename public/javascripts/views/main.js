define([
       'jquery',
       'underscore',
       'backbone',
       'bus',
       'models/session',
       'text!templates/main.html',
], function ($, _, Backbone, Bus, Session, mainTemplate) {
  var mainView = Backbone.View.extend({
    el: $('#body'),
    render: function () {
      this.$el.html(_.template(mainTemplate));
    }
  });
  return mainView;
});

