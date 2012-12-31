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
        _.each(interest_decision.requisition.skills, function(skill) {
          skills.push(skill.value);
        });
      });
      distinct_skills = $.distinct(skills);

      var combined = industries.concat(distinct_skills);
      return combined;
    },
    notInterested: function() {
      var model = this,
      url = '/companies/' + model.get("company").id + '/uninterested',
      options = {
        url: url,
        type: 'POST'
      };
      return (this.sync || Backbone.sync).call(this, null, this, options);
    }
  });
  return model;
});

