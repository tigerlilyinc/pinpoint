define([
       'jquery',
       'underscore',
       'backbone',
       'collections/decided_interest_decisions',
       'text!templates/activity.html'
], function ($, _, Backbone, DecidedInterestDecisionsCollection, template) {
  var view = Backbone.View.extend({
    el: $('#content'),
    initialize: function() {
      _.bindAll(this, 'render');

      this.decidedInterestDecisionsCollection = new DecidedInterestDecisionsCollection;
      this.decidedInterestDecisionsCollection.bind('reset', this.render);
      this.decidedInterestDecisionsCollection .fetch();
    },
    onClose: function() {
      this.decidedInterestDecisionsCollection.unbind('reset', this.render);
    },
    render: function() {
      this.$el.html(_.template(template, {interestDecisionsCollection: this.decidedInterestDecisionsCollection}));
    }
  });
  return view;
});

