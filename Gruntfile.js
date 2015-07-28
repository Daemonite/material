module.exports = function(grunt) {
	// load all grunt tasks
	require('load-grunt-tasks')(grunt);

	// grunt config
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

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
					keepalive: 'true',
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
					require('autoprefixer-core') ({
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
};
