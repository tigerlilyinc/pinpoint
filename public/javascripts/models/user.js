define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  var model = Backbone.Model.extend({
    urlRoot: "/users"
  });
  return model;
});

