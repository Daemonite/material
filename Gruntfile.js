module.exports = function(grunt) {
	// load all grunt tasks
	require('load-grunt-tasks')(grunt);

	// grunt config
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		browserSync: {
			all: {
				bsFiles: {
					src: [
						'css/*.css',
						'js/*.js',
						'templates/*.html'
					]
				},
				options: {
					proxy: '0.0.0.0:9999',
					watchTask: true
				}
			},
			base: {
				bsFiles: {
					src: [
						'css/base.min.css',
						'js/base.min.js',
						'templates/*.html'
					]
				},
				options: {
					proxy: '0.0.0.0:9999',
					watchTask: true
				}
			},
			basecss: {
				bsFiles: {
					src: [
						'css/base.min.css',
						'templates/*.html'
					]
				},
				options: {
					proxy: '0.0.0.0:9999',
					watchTask: true
				}
			},
			basejs: {
				bsFiles: {
					src: [
						'js/base.min.js',
						'templates/*.html'
					]
				},
				options: {
					proxy: '0.0.0.0:9999',
					watchTask: true
				}
			},
			project: {
				bsFiles: {
					src: [
						'css/project.min.css',
						'js/project.min.js',
						'templates/*.html'
					]
				},
				options: {
					proxy: '0.0.0.0:9999',
					watchTask: true
				}
			}
		},

		concat: {
			all: {
				files: {
					'js/base.js': ['assets/js/*.js'],
					'js/project.js': ['assets/js-project/*.js']
				}
			},
			base: {
				dest: 'js/base.js',
				src: ['assets/js/*.js']
			},
			project: {
				dest: 'js/project.js',
				src: ['assets/js-project/*.js']
			}
		},

		connect: {
			base: {
				options: {
					base: '',
					// keepalive: 'true',
					hostname: '0.0.0.0',
					port: '9999'
				}
			}
		},

		cssmin: {
			all: {
				files: [{
					cwd: 'css/',
					dest: 'css/',
					expand: true,
					ext: '.min.css',
					src: ['*.css', '!*.min.css']
				}]
			},
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
			all: {
				files: [{
					cwd: 'css/',
					dest: 'css/',
					expand: true,
					ext: '.css',
					src: ['*.css', '!*.min.css']
				}]
			},
			base: {
				src: 'css/base.css'
			},
			options: {
				map: false,
				processors: [
					require('autoprefixer') ({
						browsers: 'last 4 version'
					})
				]
			},
			project: {
				src: 'css/project.css'
			}
		},

		sass: {
			all: {
				files: [{
					'css/base.css': 'assets/sass/base.scss',
					'css/project.css': 'assets/sass-project/project.scss'
				}],
				options: {
					sourcemap: 'none',
					style: 'expanded'
				}
			},
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
			},
			project: {
				files: [{
					cwd: 'assets/sass-project/',
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
			all: {
				files: [{
					cwd: 'js/',
					dest: 'js/',
					expand: true,
					ext: '.min.js',
					src: ['*.js', '!*.min.js']
				}]
			},
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
			all: {
				files: ['assets/js/**/*.js', 'assets/js-project/**/*.js', 'assets/sass/**/*.scss', 'assets/sass-project/**/*.scss'],
				tasks: ['concat:all', 'uglify:all', 'sass:all', 'postcss:all', 'cssmin:all']
			},
			base: {
				files: ['assets/js/**/*.js', 'assets/sass/**/*.scss'],
				tasks: ['concat:base', 'uglify:base', 'sass:base', 'postcss:base', 'cssmin:base']
			},
			basecss: {
				files: ['assets/sass/**/*.scss'],
				tasks: ['sass:base', 'postcss:base', 'cssmin:base']
			},
			basejs: {
				files: ['assets/js/**/*.js'],
				tasks: ['concat:base', 'uglify:base']
			},
			project: {
				files: ['assets/js-project/**/*.js', 'assets/sass-project/**/*.scss'],
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

	grunt.registerTask( 'dev', ['connect', 'browserSync:all', 'watch:all'] );
	grunt.registerTask( 'devbase', ['connect', 'browserSync:base', 'watch:base'] );
	grunt.registerTask( 'devbasecss', ['connect', 'browserSync:basecss', 'watch:basecss'] );
	grunt.registerTask( 'devbasejs', ['connect', 'browserSync:basejs', 'watch:basejs'] );
	grunt.registerTask( 'devproject', ['connect', 'browserSync:project', 'watch:project'] );
};
