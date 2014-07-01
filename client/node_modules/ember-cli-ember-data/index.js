'use strict';

var path = require('path');
var fs   = require('fs');

function EmberCLIED(project) {
  this.project = project;
  this.name    = 'Ember CLI Ember Data';
}

function unwatchedTree(dir) {
  return {
    read:    function() { return dir; },
    cleanup: function() { }
  };
}

EmberCLIED.prototype.treeFor = function treeFor(name) {
  var treePath = path.join('node_modules/ember-cli-ember-data', name);

  if (fs.existsSync(treePath)) {
    return unwatchedTree(treePath);
  }
};

EmberCLIED.prototype.included = function included(app) {
  this.app = app;
  var modules = {
    'ember-data': [
      'default'
    ]
  };

  if (this.app.env === 'production') {
    this.app.import('vendor/ember-data/ember-data.prod.js', modules);
  } else {
    this.app.import('vendor/ember-data/ember-data.js', modules);
  }
};

module.exports = EmberCLIED;
