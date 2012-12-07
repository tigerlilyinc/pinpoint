define([
  'jquery',
  'underscore',
  'backbone',
  'models/tag'
], function($, _, Backbone, model){
  var collection = Backbone.Collection.extend({
    model: model,
    url: 'tags',
    initialize: function(){}
  });

  return collection;
});

