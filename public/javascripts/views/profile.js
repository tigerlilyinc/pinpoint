define([
       'jquery',
       'underscore',
       'backbone',
       'models/user_tag',
       'collections/tags',
       'text!templates/profile.html',
       'text!templates/tags/tag.html',
], function ($, _, Backbone, UserTag, TagsCollection, template, tagTemplate) {
  var view = Backbone.View.extend({
    el: $('#content'),
    events: {
      "click .tags li": "toggleTag"
    },
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

      var userTags = window.pinpoint.user.user_tags;
      for (var i=0; i<userTags.length; i++) {
        var userTag = userTags[i];
        var userTagEl = this.$el.find("[data-tag-id=" + userTag.tag_id + "]");
        userTagEl.addClass("is-active");
      }
    },
    toggleTag: function(e) {
      var tagEl = $(e.currentTarget);
      var tagId = tagEl.data("tag-id");
      var userTag = new UserTag({ user_id: window.pinpoint.user.id,  tag_id: tagId });

      if (tagEl.hasClass("is-active")) {
        userTag.id = -1;
        userTag.destroy({
          data: {
            user_id: userTag.get("user_id"),
            tag_id: userTag.get("tag_id")
          },
          processData: true
        });
      } else {
        userTag.save();
      }

      tagEl.toggleClass("is-active");
    }
  });
  return view;
});

