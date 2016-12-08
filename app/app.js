import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

define('math', [], function() {
  'use strict';
  return {
    PI: Math.PI,
    default: Math
  }
});

define('math-2', [], function() {
  'use strict';
  return {
    PI: function() {
      return Math.PI;
    },
    default: function() {
      return Math;
    }
  }
});




export default App;
