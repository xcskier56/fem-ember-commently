/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var Filter = require('broccoli-filter');

module.exports = function(defaults) {
    var app = new EmberApp(defaults, {
        // Add options here
    });

    return app.toTree();
};