define([
       'jquery',
       'underscore',
       'backbone',
       'text!templates/match.html'
], function ($, _, Backbone, template) {
  var view = Backbone.View.extend({
    events: {
      "click .interested": "interested",
      "click .uninterested": "uninterested",
      "click .uninterested-company": "uninterestedCompany",
      "click .show-details": "showDetails"
    },
    initialize: function(options) {
      this.model = options.model;
      _.bindAll(this, 'render');
    },
    render: function() {
      this.$el.html(_.template(template, {match: this.model}));
      return this.$el;
    },
    interested: function(e) {
      var target = $(e.currentTarget);
      var interest_decision_id = target.data("interest-decision-id");
      this.model.interested(interest_decision_id);
      target.parents(".requisition").remove();
      this.maybeRemoveCompany();
    },
    uninterested: function(e) {
      var target = $(e.currentTarget);
      var interest_decision_id = target.data("interest-decision-id");
      this.model.uninterested(interest_decision_id);
      target.parents(".requisition").remove();
      this.maybeRemoveCompany();
    },
    uninterestedCompany: function() {
      this.model.uninterestedCompany();
      this.$el.fadeOut();
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
    },
    maybeRemoveCompany: function() {
      if (this.$el.find(".requisition").length == 0) {
        this.$el.fadeOut();
      }
    }
  });
  return view;
});

