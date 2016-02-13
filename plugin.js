'use strict';

import * as Package from './package.json';

import Plugin from 'maniajs-plugin';

/**
 * Sample Plugin, For testing and example purpose.
 */
export default class extends Plugin {

  constructor() {
    super();

    this.name = Package.name;
    this.version = Package.version;

    this.dependencies = [];
  }

  init() {
    console.log("test");
    this.app.log.debug("Testing loading of plugin.");
  }
}
