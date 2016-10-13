module.exports = function(grunt) {
	'use strict';

	require('load-grunt-tasks')(grunt);
	require('time-grunt')(grunt);

	// config
		var concatBanner = '/*!\n' +
		                   ' * Material\n' +
		                   ' */\n' +
		                   'if (typeof jQuery === \'undefined\') {\n' +
		                   '	throw new Error(\'Material\\\'s JavaScript requires jQuery\')\n' +
		                   '}\n\n' +
		                   '+function ($) {\n' +
		                   '	var version = $.fn.jquery.split(\' \')[0].split(\'.\')\n' +
		                   '	if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || (version[0] >= 4)) {\n' +
		                   '		throw new Error(\'Material\\\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0\')\n' +
		                   '	}\n' +
		                   '}(jQuery);\n\n' +
		                   '+function ($) {\n' +
		                   '\'use strict\';\n\n';

		var concatFooter = '\n}(jQuery);';

		var postcssOptions = {
			browsers: [
				'Android 2.3',
				'Android >= 4',
				'Chrome >= 35',
				'Edge >= 12',
				'Explorer >= 9',
				'Firefox >= 38',
				'iOS >= 8',
				'Opera >= 12',
				'Safari >= 8'
			]
		};

		var sassOptions = {
			precision: 6,
			sourcemap: 'auto',
			style:     'expanded',
			trace:     true
		};

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		babel: {
			material: {
				options: {
					presets: ['es2015']
				},
				dest: '<%= concat.babelpre.dest %>',
				src: '<%= concat.babelpre.dest %>'
			}
		},

		concat: {
			babelpost: {
				options: {
					banner: concatBanner,
					footer: concatFooter,
					process: function(file, filepath) {
						return file.replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g, '$1');
					},
					stripBanners: {
						block: false,
						line: true
					}
				},
				dest: '<%= babel.material.dest %>',
				src: '<%= babel.material.dest %>'
			},
			babelpre: {
				dest: 'assets/js/src.js',
				src: 'assets/js/src/**/*.js'
			},
			material: {
				dest: 'js/material.js',
				src: [
					'assets/js/addons/**/*.js',
					'<%= concat.babelpost.dest %>',
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
					base: '',
					keepalive: true,
					hostname: '0.0.0.0',
					port: '9999'
				}
			},
			once: {
				options: {
					base: '',
					keepalive: false,
					hostname: '0.0.0.0',
					port: '9999'
				}
			}
		},

		cssmin: {
			material: {
				dest: 'css/material.min.css',
				src: '<%= postcss.material.dest %>'
			},
			project: {
				dest: 'css/project.min.css',
				src: '<%= postcss.project.dest %>'
			}
		},

		postcss: {
			options: {
				map: false,
				processors: [
					require('autoprefixer') (postcssOptions)
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

		sass: {
			material: {
				options: sassOptions,

				dest: 'css/material.css',
				src: 'assets/sass/material.scss'
			},
			project: {
				options: sassOptions,

				dest: 'css/project.css',
				src: 'assets/sass-project/project.scss'
			}
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
		},

		// update package.json packages
			devUpdate: {
				default: {
					options: {
						semver: false,
						updateType: 'prompt'
					}
				}
			}
	});

	grunt.registerTask(
		'default',
		[
			'material',
			'project'
		]
	);

	grunt.registerTask(
		'material',
		[
			'material-css',
			'material-js'
		]
	);

	grunt.registerTask(
		'material-css',
		[
			'sass:material',
			'postcss:material',
			'cssmin:material'
		]
	);

	grunt.registerTask(
		'material-js',
		[
			'concat:babelpre',
			'babel:material',
			'concat:babelpost',
			'concat:material',
			'uglify:material'
		]
	);

	grunt.registerTask(
		'project',
		[
			'project-css',
			'project-js'
		]
	);

	grunt.registerTask(
		'project-css',
		[
			'sass:project',
			'postcss:project',
			'cssmin:project'
		]
	);

	grunt.registerTask(
		'project-js',
		[
			'concat:project',
			'uglify:project'
		]
	);
};
