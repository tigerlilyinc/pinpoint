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
    interested: function(interest_decision_id) {
      var model = this,
      url = '/interest_decisions/' + interest_decision_id + '/interested',
      options = {
        url: url,
        type: 'POST'
      };
      return (this.sync || Backbone.sync).call(this, null, this, options);
    },
    uninterested: function(interest_decision_id) {
      var model = this,
      url = '/interest_decisions/' + interest_decision_id + '/uninterested',
      options = {
        url: url,
        type: 'POST'
      };
      return (this.sync || Backbone.sync).call(this, null, this, options);
    },
    uninterestedCompany: function() {
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

