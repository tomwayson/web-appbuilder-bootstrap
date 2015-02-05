module.exports = function(grunt) {
    var appDir = 'C:\\code\\arcgis-web-appbuilder-1.0\\server\\apps\\4';
    var stemappDir = 'C:\\code\\arcgis-web-appbuilder-1.0\\client\\stemapp';

    grunt.initConfig({
    watch: {
      main: {
      files: ['src/**'],
      tasks: ['sync'],
      options: {
        spawn: false
      }
      }
    },

    sync: {
      main: {
      files: [{
        cwd: 'src',
        src: ['**'],
        dest: appDir
      }, {
        cwd: 'src',
        src: ['**', '!index.html', '!init.js'],
        dest: stemappDir
      }],
      verbose: true // Display log messages when copying files
      }
    }

    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sync');

    grunt.registerTask('default', ['sync', 'watch']);
};

