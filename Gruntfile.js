module.exports = function(grunt) {
  // load all grunt tasks
  require('load-grunt-tasks')(grunt);

  // grunt config
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      base: {
        src: ['src/js/vendors/*.js', 'src/js/*.js'],
        dest: 'dist/js/base.js',
      }
    },

    connect: {
      html: {
        options: {
          base: '',
          keepalive: 'true',
          hostname: '0.0.0.0',
          port: '9999'
        }
      }
    },

    cssmin: {
      base: {
        src: ['dist/css/base.css'],
        dest: 'dist/css/base.min.css'
      }
    },

    postcss: {
      options: {
        map: false,
        processors: [
          require('autoprefixer-core')({browsers: 'last 4 version'}),
          require('csswring')
        ]
      },
      base: {
        src: 'dist/css/base.css'
      }
    },

    sass: {
      base: {
        files: [{
          cwd: 'src/sass/',
          dest: 'dist/css/',
          expand: true,
          ext: '.css',
          src: ['*.scss']
        }],
        options: {
          sourcemap: 'none',
          style: 'expanded'
        }
      }
    },

    uglify: {
      base: {
        files: {
          'dist/js/base.min.js': ['dist/js/base.js']
        }
      }
    },

    watch: {
      base: {
        files: ['src/js/**/*.js', 'src/sass/**/*.scss'],
        tasks: ['concat:base', 'uglify:base', 'sass:base', 'postcss:base', 'cssmin:base']
      }
    },

    // dev update
    devUpdate: {
      main: {
        options: {
          semver: false,
          updateType: 'prompt'
        }
      }
    }
  });
};
