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
				src: 'css/base.css'
			},
			project: {
				src: 'css/project.css'
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
			},
			project: {
				files: {
					'css/project.css': 'sass/project.scss',
				},
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
			},
			project: {
				files: {
					'js/project.min.js': ['js/project.js']
				}
			}
		},

		watch: {
			base: {
				files: ['js/src/*.js', 'sass/**/*.scss', '!sass/project.scss'],
				tasks: ['concat:base', 'uglify:base', 'sass:base', 'postcss:base', 'cssmin:base']
			},
			project: {
				files: ['js/src-project/*.js', 'sass/project.scss'],
				tasks: ['concat:project', 'uglify:project', 'sass:project', 'postcss:project', 'cssmin:project']
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
