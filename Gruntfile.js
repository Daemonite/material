module.exports = function(grunt) {
	'use strict';

	// load grunt tasks
		require('load-grunt-tasks')(grunt);

	// grunt config
		var postcssOptions = {
			browsers: ['> 1%', 'Firefox ESR', 'last 2 versions', 'not ie <= 9']
		};

		var sassOptions = {
			precision: 5,
			sourcemap: 'auto',
			style: 'expanded'
		};

		grunt.initConfig({
			pkg: grunt.file.readJSON('package.json'),

			concat: {
				default: {
					files: {
						'js/material.js': 'assets/js/*.js',
						'js/project.js': 'assets/js-project/*.js'
					}
				},
				material: {
					dest: 'js/material.js',
					src: 'assets/js/*.js'
				},
				project: {
					dest: 'js/project.js',
					src: 'assets/js-project/*.js'
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
				default: {
					files: [{
						cwd: 'css/',
						dest: 'css/',
						expand: true,
						ext: '.min.css',
						src: [
							'*.css',
							'!*.min.css'
						]
					}]
				},
				material: {
					dest: 'css/material.min.css',
					src: 'css/material.css'
				},
				project: {
					dest: 'css/project.min.css',
					src: 'css/project.css'
				}
			},

			postcss: {
				options: {
					map: false,
					processors: [
						require('autoprefixer') (postcssOptions)
					]
				},
				default: {
					files: [{
						cwd: 'css/',
						dest: 'css/',
						expand: true,
						ext: '.css',
						src: [
							'*.css',
							'!*.min.css'
						]
					}]
				},
				material: {
					src: 'css/material.css'
				},
				project: {
					src: 'css/project.css'
				}
			},

			sass: {
				default: {
					files: {
						'css/material.css': 'assets/sass/material.scss',
						'css/project.css': 'assets/sass-project/project.scss'
					},
					options: sassOptions
				},
				material: {
					files: {
						'css/material.css': 'assets/sass/material.scss'
					},
					options: sassOptions
				},
				project: {
					files: {
						'css/project.css': 'assets/sass-project/project.scss'
					},
					options: sassOptions
				}
			},

			uglify: {
				default: {
					files: [{
						cwd: 'js/',
						dest: 'js/',
						expand: true,
						ext: '.min.js',
						src: [
							'*.js',
							'!*.min.js'
						]
					}]
				},
				material: {
					files: {
						'js/material.min.js': 'js/material.js'
					}
				},
				project: {
					files: {
						'js/project.min.js': 'js/project.js'
					}
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
				'sass:default',
				'postcss:default',
				'cssmin:default',
				'concat:default',
				'uglify:default'
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
