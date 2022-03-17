/**
 * generator/index.js
 *
 * Exports the generators so plop knows them
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const componentGenerator = require('./component/index.js');
const containerGenerator = require('./container/index.js');

/**
 * Every generated backup file gets this extension
 * @type {string}
 */
const BACKUPFILE_EXTENSION = 'rbgen';

module.exports = (plop) => {
  plop.setGenerator('component', componentGenerator);
  // plop.setGenerator('container', containerGenerator);
  plop.setGenerator('container', containerGenerator);

  plop.addHelper('directory', (comp) => {
    try {
      fs.accessSync(
        path.join(__dirname, `../../src/containers/${comp}`),
        fs.F_OK,
      );
      return `containers/${comp}`;
    } catch (e) {
      return `components/${comp}`;
    }
  });
  plop.addHelper('curly', (object, open) => (open ? '{' : '}'));
};

module.exports.BACKUPFILE_EXTENSION = BACKUPFILE_EXTENSION;
