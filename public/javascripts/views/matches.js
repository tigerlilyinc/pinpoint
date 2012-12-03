define([
       'jquery',
       'underscore',
       'backbone',
       'collections/matches',
       'text!templates/matches.html',
       'text!templates/matches/company.html',
], function ($, _, Backbone, MatchesCollection, template, matchesCompanyTemplate) {
  var view = Backbone.View.extend({
    el: $('#content'),
    initialize: function() {
      _.bindAll(this, 'render');

      this.matchesCollection = new MatchesCollection;
      this.matchesCollection.bind('reset', this.render);
      this.matchesCollection.fetch();
    },
    render: function() {
      this.$el.html(_.template(template));
      var ul = this.$el.find(".matches > ul");
      ul.empty();
      _.each(this.matchesCollection, function() {
        ul.append(_.template(matchesCompanyTemplate));
      });
    }
  });
  return new view;
});

