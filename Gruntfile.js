module.exports = function(grunt) {
	// load all grunt tasks
	require('load-grunt-tasks')(grunt);

	// grunt config
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: {
			base: {
				dest: 'js/base.js',
				src: ['assets/js/*.js']
			}
		},

		connect: {
			base: {
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
				files: [{
					cwd: 'css/',
					dest: 'css/',
					expand: true,
					ext: '.min.css',
					src: ['*.css', '!*.min.css']
				}]
			}
		},

		postcss: {
			options: {
				map: false,
				processors: [
					require('autoprefixer-core') ({
						browsers: 'last 4 version'
					})
				]
			},
			base: {
				files: [{
					cwd: 'css/',
					dest: 'css/',
					expand: true,
					ext: '.css',
					src: ['*.css', '!*.min.css']
				}]
			}
		},

		sass: {
			base: {
				files: [{
					cwd: 'assets/sass/',
					dest: 'css/',
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
				files: [{
					cwd: 'js/',
					dest: 'js/',
					expand: true,
					ext: '.min.js',
					src: ['*.js', '!*.min.js']
				}]
			}
		},

		watch: {
			base: {
				files: ['assets/js/**/*.js', 'assets/sass/**/*.scss'],
				tasks: ['concat:base', 'uglify:base', 'sass:base', 'postcss:base', 'cssmin:base']
			},
			basejs: {
				files: ['assets/js/**/*.js'],
				tasks: ['concat:base', 'uglify:base']
			},
			basesass: {
				files: ['assets/sass/**/*.scss'],
				tasks: ['sass:base', 'postcss:base', 'cssmin:base']
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
