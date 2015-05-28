module.exports = function(grunt) {
	// load all grunt tasks
	require('load-grunt-tasks')(grunt);

	// grunt config
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		bower_concat: {
			all: {
				dest: 'js/vendor.js',
				mainFiles: {
					'Sortable': ['Sortable.js', 'jquery.binding.js']
				},
				dependencies: {
					'Sortable': 'jquery'
				},
				exclude: [
					'respond',
					'html5shiv'
				]
			}
		},

		bowercopy: {
			headers: {
				options: {
					destPrefix: 'js'
				},
				files: {
					'respond.js': 'respond/dest/respond.min.js',
					'html5shiv.js': 'html5shiv/dist/html5shiv.min.js'
				}
			}
		},

		concat: {
			base: {
				src: ['js/src/*.js'],
				dest: 'js/base.js'
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
					'css/project.css': 'sass/project.scss'
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
					'js/base.min.js': ['js/base.js'],
					'js/vendor.min.js': ['js/vendor.js']
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
				tasks: ['bower_concat:all', 'concat:base', 'uglify:base', 'sass:base', 'cssmin:base']
			},
			project: {
				files: ['js/src-project/*.js', 'sass/project.scss'],
				tasks: ['concat:project', 'uglify:project', 'sass:project', 'cssmin:project']
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

	grunt.registerTask('default', ['bower_concat', 'bowercopy', 'concat', 'uglify', 'sass', 'cssmin']);
};