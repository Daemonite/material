module.exports = function(grunt) {
	'use strict';

	// load grunt tasks
	require('load-grunt-tasks')(grunt);

	// grunt config
	var postcssOptions = {
		browsers: ['> 1%', 'Firefox ESR', 'last 2 versions', 'not ie <= 9']
		// browsers: [
		// 	'Android 2.3',
		// 	'Android >= 4',
		// 	'Chrome >= 35',
		// 	'Edge >= 12',
		// 	'Explorer >= 9',
		// 	'Firefox >= 31',
		// 	'iOS >= 8',
		// 	'Opera >= 12',
		// 	'Safari >= 8'
		// ]
	};

	var sassOptions = {
		precision: 6,
		sourcemap: 'auto',
		style: 'expanded'
	};

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: {
			material: {
				dest: 'js/material.js',
				src: 'assets/js/**/*.js'
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

		// dev update
		devUpdate: {
			default: {
				options: {
					semver: false,
					updateType: 'prompt'
				}
			}
		}
	});

	// grunt tasks
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
			'sass:material',
			'postcss:material',
			'cssmin:material',
			'concat:material',
			'uglify:material'
		]
	);

	grunt.registerTask(
		'project',
		[
			'sass:project',
			'postcss:project',
			'cssmin:project',
			'concat:project',
			'uglify:project'
		]
	);
};
