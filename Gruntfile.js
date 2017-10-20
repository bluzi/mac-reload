module.exports = function (grunt) {
  const SOURCES = [
    './src/inject.js'
  ];

  grunt.initConfig({
    browserify: {
      development: {
        src: SOURCES,
        dest: './dist/mac-reload.dist.js',
        options: {
          browserifyOptions: { debug: true },
          transform: [['babelify', { 'presets': ['es2015'] }]],
          
          watch: true,
          keepAlive: true
        }
      },
      production: {
        src: SOURCES,
        dest: './dist/mac-reload.dist.js',
        options: {
          browserifyOptions: { debug: false },
          transform: [['babelify', { 'presets': ['es2015'] }]],
        }
      }
    },
    removelogging: {
      dist: {
        // Clean up all js file inside "dist" or its subfolders
        src: "dist/**/*.js",
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks("grunt-remove-logging");

  grunt.registerTask('build-dev', ['browserify:development']);
  grunt.registerTask('build-prod', ['browserify:production', 'removelogging']);
};