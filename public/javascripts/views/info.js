define([
       'jquery',
       'underscore',
       'backbone',
       'text!templates/info.html',
], function ($, _, Backbone, template) {
  var view = Backbone.View.extend({
    el: $('#body'),
    render: function () {
      this.$el.html(_.template(template));
    },
    show: function(tab) {
      var that = this;
      require(['views/info/' + tab], function(InfoTabView) {
        var infoTabView = new InfoTabView;
        that.$('.info-content').fadeOut(500, function() {
          infoTabView.setElement(that.$('.info-content')).render();
        });
      });
    }
  });
  return view;
});

