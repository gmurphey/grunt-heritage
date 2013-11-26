/*
 * grunt-packager
 * https://github.com/gmurphey/grunt-packager
 *
 * Copyright (c) 2013 Garrett Murphey
 * Licensed under the MIT license.
 */

"use strict";

module.exports = function (grunt) {

  grunt.registerTask("packager", "Your task description goes here.", function () {
    var parent_src, parent_props,
      _ = require("lodash"),
      options = this.options({
        parent: "package.json",
        properties: ["name", "description", "version"],
        children: []
      });

    if (!_.isArray(options.children) && !options.children.length) {
      grunt.fail.fatal("It seems children weren't defined? (ex., ['bower.json', 'components.json'])");
    }

    parent_src = grunt.file.readJSON(options.parent);
    parent_props = _.pick(parent_src, options.properties);

    options.children.forEach(function (child) {
      var child_src = grunt.file.readJSON(child),
        child_props = _.extend({}, child_src, parent_props);

      grunt.file.write(child, JSON.stringify(child_props, null, 2));
    }, this);
  });

};
