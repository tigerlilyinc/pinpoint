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
    events: {
      "click .not-interested": "notInterested",
      "click .show-details": "showDetails"
    },
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
        ul.append(_.template(matchesCompanyTemplate, {match: match}));
      });
    },
    // notInterested and showDetails really should be in a model view rather than a collection view.
    notInterested: function(e) {
      var currentTarget = $(e.currentTarget);
      currentTarget.parents('.company').fadeOut();
      var match = this.matchesCollection.models[0]; // TODO: Change me when this is moved to the model.
      match.notInterested();
    },
    showDetails: function() {
      var details = this.$el.find(".details");
      var showDetailsButton = this.$el.find(".show-details");
      if (details.is(":visible")) {
        showDetailsButton.addClass("green");
        showDetailsButton.html("Show Me Details!");
      } else {
        showDetailsButton.removeClass("green");
        showDetailsButton.html("Hide Details");
      }
      this.$el.find(".details").slideToggle();
    }
  });
  return view;
});

