module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    browserify: {
      main: {
        options: {
          debug: true,
        },
        files: {
		  // output: bundle.js; input: index.js
          'bundle.js': 'index.js',
        },
      },
    },
  });

  // Tell Grunt to load tasks from NPM dependencies.
  grunt.loadNpmTasks('grunt-browserify');

  // Set up individual tasks.
  grunt.registerTask('default', ['browserify']);
};
