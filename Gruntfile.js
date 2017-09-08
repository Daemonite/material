module.exports = function(grunt) {
  'use strict'

  require('load-grunt-tasks')(grunt)
  require('time-grunt')(grunt)

  // project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    banner: '/*!\n' +
            ' * Material v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
            ' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' * Licensed under MIT (https://github.com/Daemonite/material/blob/master/LICENSE)\n' +
            ' */\n\n' +
            'if (typeof jQuery === \'undefined\') {\n' +
            '  throw new Error(\'Material\\\'s JavaScript requires jQuery\')\n' +
            '}\n\n' +
            '+function ($) {\n' +
            '  var version = $.fn.jquery.split(\' \')[0].split(\'.\')\n' +
            '  if (version[0] < 3 || version[0] >= 4) {\n' +
            '    throw new Error(\'Material\\\'s JavaScript requires at least jQuery v3.0.0 but less than v4.0.0\')\n' +
            '  }\n' +
            '}(jQuery);\n',

    babel: {
      material: {
        options: {
          'babelrc': false,
          'plugins': [
            'transform-es2015-modules-strip'
          ],
          'presets': [
            [
              'es2015',
              {
                'loose': true,
                'modules': false
              }
            ]
          ]
        },
        dest: '<%= concat.init.dest %>',
        src: '<%= concat.init.dest %>'
      }
    },

    concat: {
      init: {
        options: {
          banner: '+function () {\n',
          footer: '\n}();',
          process: function (src) {
            return src.replace(/^(export|import).*/gm, '')
          }
        },
        dest: 'assets/js/src.js',
        src: 'assets/js/src/**/*.js'
      },
      material: {
        options: {
          banner: '<%= banner %>\n',
          process: function (src) {
            return src.replace('"function"==typeof define&&define.amd?define("picker",["jquery"],a):"object"==typeof exports?module.exports=a(require("jquery")):', '').replace('"function"==typeof define&&define.amd?define(["picker","jquery"],a):"object"==typeof exports?module.exports=a(require("./picker.js"),require("jquery")):', '')
          },
          stripBanners: {
            block: false,
            line: true
          }
        },
        dest: 'js/material.js',
        src: [
          'assets/js/addons/picker.js',
          'assets/js/addons/picker.date.js',
          'assets/js/addons/textarea-autosize.js',
          'assets/js/addons/waves.js',
          'assets/js/addons-materialise/picker.js',
          'assets/js/addons-materialise/textarea-autosize.js',
          'assets/js/addons-materialise/waves.js',
          '<%= babel.material.dest %>',
        ]
      },
      project: {
        dest: 'js/project.js',
        src: 'assets/js-project/**/*.js'
      }
    },

    connect: {
      live: {
        options: {
          base: 'gh-pages/',
          keepalive: true,
          hostname: '0.0.0.0',
          port: '9999'
        }
      },
      once: {
        options: {
          base: 'gh-pages/',
          keepalive: false,
          hostname: '0.0.0.0',
          port: '9999'
        }
      }
    },

    copy: {
      doc: {
        files: [
          {
            dest: 'gh-pages/material/', // workaround for our GitHub Pages hosting
            expand: true,
            src: [
              'bs/**',
              'css/**',
              'js/**'
            ]
          }
        ]
      }
    },

    cssmin: {
      options: {
        rebaseTo: 'css',
        report: 'gzip',
        sourceMap: true
      },
      material: {
        dest: 'css/material.min.css',
        src: '<%= postcss.material.dest %>'
      },
      project: {
        dest: 'css/project.min.css',
        src: '<%= postcss.project.dest %>'
      }
    },

    jekyll: {
      options: {
        bundleExec: true,
        config: '_config.yml',
        incremental: false
      },
      doc: {}
    },

    postcss: {
      options: {
        map: {
          annotation: true,
          inline: false,
          sourcesContent: true
        },
        processors: [
          require('autoprefixer')({
            browsers: [
              'Android 2.3',
              'Android >= 4',
              'Chrome >= 35',
              'Edge >= 12',
              'Explorer >= 10',
              'Firefox >= 38',
              'iOS >= 8',
              'Opera >= 12',
              'Safari >= 8'
            ]
          })
        ]
      },
      material: {
        dest: 'css/material.css',
        src: '<%= sass.material.dest %>'
      },
      project: {
        dest: 'css/project.css',
        src: '<%= sass.project.dest %>'
      }
    },

    prettify: {
      options: {
        indent_inner_html: false
      },
      doc: {
        cwd: 'gh-pages/',
        dest: 'gh-pages/',
        expand: true,
        ext: '.html',
        src: ['**/*.html']
      }
    },

    qunit: {
      options: {
        inject: 'assets/js/tests/unit/phantom.js'
      },
      files: 'assets/js/tests/index.html'
    },

    sass: {
      options: {
        precision: 6,
        style: 'expanded'
      },
      material: {
        dest: 'css/material.css',
        src: 'assets/sass/material.scss'
      },
      project: {
        dest: 'css/project.css',
        src: 'assets/sass-project/project.scss'
      }
    },

    scsslint: {
      options: {
        config: 'assets/sass/.scss-lint.yml'
      },
      material: ['assets/sass/**/*.scss'],
      project: ['assets/sass-project/**/*.scss']
    },

    uglify: {
      material: {
        dest: 'js/material.min.js',
        src: '<%= concat.material.dest %>'
      },
      project: {
        dest: 'js/project.min.js',
        src: '<%= concat.project.dest %>'
      }
    },

    watch: {
      default: {
        files: [
          'assets/**/*.js',
          'assets/**/*.scss'
        ],
        tasks: [
          'default'
        ]
      },
      material: {
        files: [
          'assets/js/**/*.js',
          'assets/sass/**/*.scss'
        ],
        tasks: [
          'material'
        ]
      },
      project: {
        files: [
          'assets/js-project/**/*.js',
          'assets/sass-project/**/*.scss'
        ],
        tasks: [
          'project'
        ]
      }
    }
  })

  // task registration
  grunt.registerTask(
    'default',
    [
      'material',
      'project'
    ]
  )

  grunt.registerTask(
    'doc',
    [
      'default',
      'jekyll:doc',
      'prettify:doc',
      'connect:live'
    ]
  )

  grunt.registerTask(
    'material',
    [
      'material-css',
      'material-js'
    ]
  )

  grunt.registerTask(
    'material-css',
    [
      'sass:material',
      'postcss:material',
      'cssmin:material'
    ]
  )

  grunt.registerTask(
    'material-js',
    [
      'concat:init',
      'babel:material',
      'concat:material',
      'uglify:material'
    ]
  )

  grunt.registerTask(
    'project',
    [
      'project-css',
      'project-js'
    ]
  )

  grunt.registerTask(
    'project-css',
    [
      'sass:project',
      'postcss:project',
      'cssmin:project'
    ]
  )

  grunt.registerTask(
    'project-js',
    [
      'concat:project',
      'uglify:project'
    ]
  )
}
