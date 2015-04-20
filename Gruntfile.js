module.exports = function(grunt) {
	// load all grunt tasks
	require('load-grunt-tasks')(grunt);

	// grunt config
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: {
			base: {
				src: ['js/src/*.js'],
				dest: 'js/base.js',
			},
			project: {
				src: ['js/src-project/*.js'],
				dest: 'js/project.js'
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
				src: ['css/base.css'],
				dest: 'css/base.min.css'
			},
			project: {
				src: ['css/project.css'],
				dest: 'css/project.min.css'
			}
		},

		sass: {
			all: {
				files: [{
					cwd: 'sass/',
					dest: 'css/',
					expand: true,
					ext: '.css',
					src: ['*.scss']
				}],
				options: {
					style: 'nested'
				}
			}
		},

		uglify: {
			base: {
				files: {
					'js/base.min.js': ['js/base.js']
				}
			},
			project: {
				files: {
					'js/project.min.js': ['js/project.js']
				}
			}
		},

		watch: {
			jsbase: {
				files: ['js/src/*.js'],
				tasks: ['concat:base', 'uglify:base']
			},
			jsproject: {
				files: ['js/src-project/*.js'],
				tasks: ['concat:project', 'uglify:project']
			},
			sass: {
				files: ['sass/**/*.scss'],
				tasks: ['sass', 'cssmin']
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