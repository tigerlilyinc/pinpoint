define([
  'jquery',
  'underscore',
  'backbone',
  'models/match'
], function($, _, Backbone, model){
  var collection = Backbone.Collection.extend({
    model: model,
    url: '/matches'
  });

  return collection;
});

