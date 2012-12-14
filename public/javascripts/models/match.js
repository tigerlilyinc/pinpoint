define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  var model = Backbone.Model.extend({
    combinedSkillAndIndustryTags: function() {
      industries = [];
      _.each(this.get("company").industries, function(industry) {
        industries.push(industry.value);
      });

      skills = [];
      _.each(this.get("interest_decisions"), function(interest_decision) {
        _.each(interest_decision.skills, function(skill) {
          skills.push(skill.value);
        });
      });
      distinct_skills = $.distinct(skills);

      var combined = industries.concat(distinct_skills);
      return combined;
    }
  });
  return model;
});

