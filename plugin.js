'use strict';

var async = require('async');

module.exports = {};

module.exports.pluginInfo = {
  // TODO: We already have this info in package.json!
  id: 'maniajs-sample',
  authors: [
    "Sample Developer <exampl@example.com>"
  ],
  version: "1.0.0",
  description: "Chat handlers, In and output for chat access.",


  dependencies: [],   // What plugins are needed to operate
  requirements: [],   // What plugins are required to be started before we can start
  games: null,        // Define array with list of supported games, null for all (including future games)
  modes: null         // Define array with list of supported gamemodes, null for all
};

module.exports.loadPlugin = function(pluginInterface, callback) {
  setTimeout(function() {
    return callback(null);
  }, 1000);
};