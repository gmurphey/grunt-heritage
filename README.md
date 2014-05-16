# grunt-heritage

[![Build Status](http://img.shields.io/travis/gmurphey/grunt-heritage.svg)](https://travis-ci.org/gmurphey/grunt-heritage) [![Gittip](http://img.shields.io/gittip/gmurphey.svg)](https://www.gittip.com/gmurphey/)

Hate keeping version numbers and other properties up-to-date in multiple JSON package management files? Enter grunt-heritage. Automatically copy properties from a parent file (`package.json`) into child files (`bower.json`, `component.json`, etc.).

## Getting Started

This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-heritage --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-heritage');
```

## The "heritage" task

### Overview
In your project's Gruntfile, add a section named `heritage` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  heritage: {
    options: {
      parent: "package.json", // default
      properties: ["name", "description", "version"], // default
      children: ["bower.json"] // required
    }
  }
})
```

### Options

#### options.parent
Type: `String`  
Default value: `'package.json'`

The file to pull properties from.

#### options.properties
Type: `Array`  
Default value: `['name', 'description', 'version']`

The property names to copy into child files.

#### options.children
Type: `Array`  
Default value: `[]`

The files to write the parent properties to.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

0.1.0 - Initial release.
