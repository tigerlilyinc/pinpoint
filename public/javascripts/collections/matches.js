define([
  'jquery',
  'underscore',
  'backbone',
  'models/match'
], function($, _, Backbone, model){
  var collection = Backbone.Collection.extend({
    model: model,
    url: 'data/matches.json',
    initialize: function(){}
  });

  return collection;
});

