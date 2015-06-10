module.exports = function(grunt) {
	// load all grunt tasks
	require('load-grunt-tasks')(grunt);

	// grunt config
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: {
			base: {
				src: ['assets/javascripts/src/vendors/*.js', 'assets/javascripts/src/*.js'],
				dest: 'dist/js/base.js',
			},
			project: {
				src: ['assets/javascripts/src/vendors/*.js', 'assets/javascripts/src-project/*.js'],
				dest: 'dist/js/project.js'
			}
		},

		connect: {
			html: {
				options: {
					base: 'demo',
					keepalive: 'true',
					hostname: '0.0.0.0',
					port: '9999'
				}
			}
		},

		cssmin: {
			base: {
				src: ['dist/css/base.css'],
				dest: 'dist/css/base.min.css'
			},
			project: {
				src: ['dist/css/project.css'],
				dest: 'dist/css/project.min.css'
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
				src: 'dist/css/base.css'
			},
			project: {
				src: 'dist/css/project.css'
			}
		},

		sass: {
			base: {
				files: [{
					cwd: 'assets/stylesheets/',
					dest: 'dist/css/',
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
					'dist/css/project.css': 'assets/stylesheets/project.scss',
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
					'dist/js/base.min.js': ['dist/js/base.js']
				}
			},
			project: {
				files: {
					'dist/js/project.min.js': ['dist/js/project.js']
				}
			}
		},

		watch: {
			base: {
				files: ['assets/javascripts/src/*.js', 'assets/stylesheets/**/*.scss', '!sass/project.scss'],
				tasks: ['concat:base', 'uglify:base', 'sass:base', 'postcss:base', 'cssmin:base', 'copy:base']
			},
			project: {
				files: ['assets/javascripts/src-project/*.js', 'assets/stylesheets/project.scss'],
				tasks: ['concat:project', 'uglify:project', 'sass:project', 'postcss:project', 'cssmin:project', 'copy:project']
			}
		},

		copy: {
			base: {
				files: [
					{expand: true, src: ['dist/css/base*'], dest: 'demo/css/', flatten: true },
					{expand: true, src: ['dist/js/base*'], dest: 'demo/js/', flatten: true },
					{expand: true, src: ['assets/fonts/*'], dest: 'demo/css/fonts/', flatten: true },
					{expand: true, src: ['assets/fonts/*'], dest: 'dist/css/fonts/', flatten: true }
				]
			},
			project: {
				files: [
					{expand: true, src: ['dist/css/project*'], dest: 'demo/css/', flatten: true },
					{expand: true, src: ['dist/js/project*'], dest: 'demo/js/', flatten: true },
					{expand: true, src: ['assets/fonts/*'], dest: 'demo/css/fonts/', flatten: true },
					{expand: true, src: ['assets/fonts/*'], dest: 'dist/css/fonts/', flatten: true }
				]
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
