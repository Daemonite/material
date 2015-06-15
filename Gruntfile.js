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
				src: 'css/base.css'
			}
		},

		sass: {
			base: {
				files: [{
					cwd: 'sass/',
					dest: 'css/',
					expand: true,
					ext: '.css',
					src: ['*.scss', '!project.scss']
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
					'js/base.min.js': ['js/base.js']
				}
			}
		},

		watch: {
			base: {
				files: ['js/src/*.js', 'sass/**/*.scss', '!sass/project.scss'],
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
