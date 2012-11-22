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
      require(['views/matches'], function(matchesView) {
        matchesView.render();
      });
    },
    initialize: function() {
      Bus.on('validSessionAuth', this.render, this);
    }
  });
  return new mainView;
});

