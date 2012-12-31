define([
  'jquery',
  'underscore',
  'backbone',
  'bus'
], function ($, _, Backbone, Bus) {
  var SessionModel = Backbone.Model.extend({
    url: '/sessions',
    login: function (credentials, callback) {
      var that = this;
      this.save(credentials, {
        success: function (model, res) {
          that.doTriggers(model);
          if(typeof res == typeof(Function)) {
            callback(res);
          }
        }
      });
    },
    logout: function (callback) {
      var that = this;
      this.id = 1;  // TODO: All Backbone models need an id
      this.destroy({
        success: function (model, res) {
          that.doTriggers(model);
          model.clear();
          model.id = null;
          callback(res);
        }
      });
    },
    check: function (callback) {
      var that = this;
      callback({}, null);
      this.fetch({
        success: function (model, res) {
          that.doTriggers(model);
          callback(res);
        }
      });
    },
    checkAuth: function () {
      return ( $('meta[name="auth-token"]').attr('content') ? true : false );
    },
    doTriggers: function(model) {
      var authTokenEl = $('meta[name="auth-token"]');

      if (model.get("auth")) {
        window.pinpoint.user = model.get("user");
        authTokenEl.attr("content", model.get("user").authentication_token);
        console.log('validSessionAuth');
        Bus.trigger('validSessionAuth');
      } else {
        window.pinpoint.user = null;
        authTokenEl.attr("content", "");
        console.log('invalidSessionAuth');
        Bus.trigger('invalidSessionAuth');
      }
    }
  });
  return SessionModel;
});

