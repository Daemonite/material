module.exports = function(grunt) {
	// load all grunt tasks
	require('load-grunt-tasks')(grunt);

	// grunt config
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			dist: {
				src: ['js/src/*.js'],
				dest: 'js/base.js',
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
      minify: {
        src: ['css/base.css'],
        dest: 'css/base.min.css'
      }
    },
		sass: {
			dist: {
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
			targets: {
				files: {
					'js/base.min.js': ['js/base.js']
				}
			}
		},
		watch: {
			js: {
				files: ['js/src/*.js'],
				tasks: ['concat', 'uglify']
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