define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  var model = Backbone.Model.extend({
    urlRoot: "/user_tags"
  });
  return model;
});

