'use strict';

import * as Package from './package.json';
import * as path from 'path';

import Plugin from 'maniajs-plugin';

/**
 * Sample Plugin, For testing and example purpose.
 */
export default class extends Plugin {

  constructor() {
    super();

    // Set the package stuff into the plugin context.
    this.name = Package.name;
    this.version = Package.version;
    this.directory = __dirname;

    // Add dependencies, enter module full id's (mostly npm package names) here.
    this.dependencies = [];
  }

  /**
   * Init will be run once the plugin can register everything at the core.
   * From this point the {this.app} and all other injected variables are available.
   *
   * @return {Promise} The init should ALWAYS return a promise, the core will wait until the promise has been resolved!
   */
  init() {
    return new Promise((resolve, reject) => {
      this.app.log.debug('Testing loading of plugin.');

      // Event
      this.server.on('player.chat', (info) => {
        console.log('Player '+info.login+' chat: '+info.text);
      });

      // Test by inserting Sample object.
      let sample = this.models['Sample'].create({
          sample: 'testing'
        })
        .then(() => {
          console.log("SAVED!");

          return resolve();
        })
        .catch((err) => {
          console.error(err.stack);

          return reject(err);
        });
    });
  }
}
