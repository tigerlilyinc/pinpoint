require.config({
  shim: {
    'etch': {
      exports: 'etch'
    },
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'jquery_distinct': {
      deps: ['jquery']
    },
    'jquery_highlight': {
      deps: ['jquery']
    },
    'jquery_serialize': {
      deps: ['jquery']
    }
  },
  paths: {
    array_remove: 'libs/javascript/array-remove',
    backbone: 'libs/backbone/backbone-min',
    etch: 'libs/etch/etch',
    jquery: 'libs/jquery/jquery-min',
    jquery_distinct: 'libs/jquery/jquery-distinct',
    jquery_highlight: 'libs/jquery/jquery-highlight',
    jquery_serialize: 'libs/jquery/jquery-serialize',
    text: 'libs/require/plugins/text',
    templates: '../templates',
    underscore: 'libs/underscore/underscore-min'
  }
});

require([
        'app'
], function(App) {
  App.initialize();
});

