define([
       'jquery',
       'underscore',
       'backbone',
       'collections/tags',
       'text!templates/profile.html',
       'text!templates/tags/tag.html',
], function ($, _, Backbone, TagsCollection, template, tagTemplate) {
  var view = Backbone.View.extend({
    el: $('#content'),
    initialize: function() {
      _.bindAll(this, 'render');

      this.tagsCollection = new TagsCollection;
      this.tagsCollection.bind('reset', this.render);
      this.tagsCollection.fetch();
    },
    render: function() {
      this.$el.html(_.template(template));

      var skillTags = _(this.tagsCollection.filter(function(tag) {
        return (tag.get("type") == "Tag::Skill");
      }));
      var industryTags = _(this.tagsCollection.filter(function(tag) {
        return (tag.get("type") == "Tag::Industry");
      }));
      var positionTags = _(this.tagsCollection.filter(function(tag) {
        return (tag.get("type") == "Tag::Position");
      }));

      var skillsUl = this.$el.find(".skills.tags");
      skillsUl.empty();
      skillTags.each(function(tag) {
        skillsUl.append(_.template(tagTemplate, {model: tag}));
      });

      var industriesUl = this.$el.find(".industries.tags");
      industriesUl.empty();
      industryTags.each(function(tag) {
        industriesUl.append(_.template(tagTemplate, {model: tag}));
      });

      var positionsUl = this.$el.find(".positions.tags");
      positionsUl.empty();
      positionTags.each(function(tag) {
        positionsUl.append(_.template(tagTemplate, {model: tag}));
      });

      var user_tags = window.pinpoint.user.user_tags;
      for (var i=0; i<user_tags.length; i++) {
        var user_tag = user_tags[i];
        this.$el.find("[data-id=" + user_tag.tag_id + "]").addClass("is-active");
      }
    }
  });
  return view;
});

