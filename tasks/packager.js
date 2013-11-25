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
    var master_src, master_props,
      _ = require("lodash"),
      options = this.options({
        master: "package.json",
        properties: ["name", "description", "version"]
      });

    if (!_.isArray(options.slaves)) {
      grunt.fail.fatal("It seems slaves weren't defined? (ex., ['bower.json', 'components.json'])");
    }

    master_src = grunt.file.readJSON(options.master);
    master_props = _.pick(master_src, options.properties);

    options.slaves.forEach(function (slave) {
      var slave_src = grunt.file.readJSON(slave),
        slave_props = _.extend({}, slave_src, master_props);

      grunt.file.write(slave, JSON.stringify(slave_props, null, 2));
    }, this);
  });

};
