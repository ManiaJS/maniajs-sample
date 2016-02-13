'use strict';

import * as Package from './package.json';

import Plugin       from 'maniajs-plugin';

/**
 * Sample Plugin, For testing and example purpose.
 */
export default new Plugin({
  name: Package.name,
  version: Package.version,

  // this.app will be the core app interface

  init() {
    this.app.log.debug("Testing");
  }
});
