/**
 * componentExists
 *
 * Check whether the given component exist in either the components or containers directory
 */

const fs = require('fs');
const path = require('path');

const pageComponents = fs.readdirSync(
  path.join(__dirname, '../../../src/components'),
);
const pageContainers = fs.readdirSync(
  path.join(__dirname, '../../../src/containers'),
);

const components = [...pageComponents, ...pageContainers];

// let components = pageComponents.concat(pageContainers);
// components = components.concat(pageScreens);

function componentExists(comp) {
  return components.indexOf(comp) >= 0;
}

module.exports = componentExists;
