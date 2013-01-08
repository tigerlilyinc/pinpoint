define([
  'jquery',
  'underscore',
  'backbone',
  'models/interest_decision'
], function($, _, Backbone, model){
  var collection = Backbone.Collection.extend({
    model: model,
    url: '/interest_decisions'
  });

  return collection;
});

