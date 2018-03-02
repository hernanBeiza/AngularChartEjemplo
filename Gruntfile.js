module.exports = function(grunt){

	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),

		clean: ['./dist'],

		copy: {
		  main: {
		    files: [
		      // includes files within path and its sub-directories
		      {expand: true, src: ['./app/**','!./app/assetsOLD/**'], dest: 'dist/'},
		    ],
		  },
		},

		ngconstant: {
			// Options for all targets
			options: {
				space: '  ',
				wrap: '"use strict";\n\n {\%= __ngModule %}',
				name: 'constantes',
			},
			// Environment targets
			development: {
				options: {
					dest: './app/js/config.js',
				},
				constants: {
			        //package: grunt.file.readJSON('config.json')
					ENV: {
						name: 'development',
						APIEndPoint: 'http://0.0.0.0:4000/',
						APIEndPointContacto: 'http://192.168.56.101/policenter/api/contactos'
					}
				}
			},
			production: {
				options: {
					dest: './app/js/config.js'
				},
				constants: {
			        //package: grunt.file.readJSON('config.json')
					ENV: {
						name: 'production',
						//APIEndPoint: 'http://www.policenter.cl/data/'
						APIEndPoint: 'http://policenter.hiperactivo.cl/',
						APIEndPointContacto: 'http://www.policenter.cl/ha/api'
					}
				}
			}
		},

		processhtml: {
			development: {
				options: {
		        	process: true,
			        data: {
						title: 'DEV Policenter.cl',
						message: 'Development',
						//base: '"/policenter/nuevo/"'
						base: '/'
			        }
				},
				files: {
			        './dist/app/index.html': ['./app/index.html']
				}    
		    },
		    production: {
				options: {
		        	process: true,
		        	data: {
						title: 'PROD Policenter',
						message: 'Production',
						base: '"/"'
					}
				},
				files: {
			        './dist/app/index.html': ['./app/index.html']
				}    
			},
		},

		compress: {
			main: {
			    options: {
			      mode: 'zip',
			      archive: './dist/app.zip'
			    },
			    files: [{
			      expand: true,
			      src: ['./dist/app/**'],
			      //dest: './dist/'
			    }]
			}
		},

		watch:{			
			files:['./app/','./app/*.*','./app/**/*.*'],
			//files:['./dist/app/','./dist/app/*.*'],
  		},
  		
  		express: {
  			all: {
  				options:{
					port:4000,
					hostname:'0.0.0.0',
  					bases:['./app/','./app/**/*.*'],
  					livereload: true
  				}
			},
			dev: {
  				options:{
					port:4000,
					hostname:'0.0.0.0',
  					bases:['./app/','./app/**/*.*'],
				    livereload: true
  				}
			},
			prod: {
  				options:{
					port:4000,
					hostname:'0.0.0.0',
  					bases:['./app/','./app/**/*.*'],
				    livereload: true
  				}
  			}
		},

  		open: {
		    all: {
		        path: 'http://0.0.0.0:4000/'
		    }
		}


	});
 
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-compress');
	grunt.loadNpmTasks('grunt-contrib-copy');	
	grunt.loadNpmTasks('grunt-ng-constant');
	grunt.loadNpmTasks('grunt-processhtml');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-express');	
	grunt.loadNpmTasks('grunt-open');	
	
	grunt.registerTask('build:prod',[
		'ngconstant:production',
		//'express:prod',
		'clean',
		'copy',
		'processhtml:production',
		'compress',
		//'open',
		//'watch'
	]);
	
	grunt.registerTask('build:dev',[
		'ngconstant:development',
		//'express:dev',
		'clean',
		'copy',
		'processhtml:development',
		'compress',
		//'open',
		//'watch'
	]);
	
	grunt.registerTask('dev',[
		'ngconstant:development',
		'express:dev',
		'open',
		'watch'
	]);
	
	// Cuando hay cambios
	/*
	grunt.event.on('watch', function(action, filepath, target) {
		//grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
	});
	*/

	grunt.registerTask('default',['dev']);

};