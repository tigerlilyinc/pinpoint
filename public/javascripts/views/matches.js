define([
       'jquery',
       'underscore',
       'backbone',
       'collections/matches',
       'views/match',
       'text!templates/matches.html'
], function ($, _, Backbone, MatchesCollection, MatchView, template) {
  var view = Backbone.View.extend({
    el: $('#content'),
    initialize: function() {
      _.bindAll(this, 'render');

      this.matchesCollection = new MatchesCollection;
      this.matchesCollection.bind('reset', this.render);
      this.matchesCollection.fetch();
    },
    onClose: function() {
      this.matchesCollection.unbind('reset', this.render);
    },
    render: function() {
      this.$el.html(_.template(template));
      var ul = this.$el.find(".matches > ul");
      ul.empty();
      this.matchesCollection.each(function(match) {
        ul.append(new MatchView({model: match}).render());
      });
    }
  });
  return view;
});

