module.exports = function ( grunt ) {
  'use strict';

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-connect');


  grunt.initConfig({
  	pkg: grunt.file.readJSON('package.json'),
  	connect: {
      server: {
        options: {
          livereload: true,
          base: 'public/',
          port: 9009,
          hostname: 'localhost'
        }
      }
    },
    compass: {
	    dev: {
	    	options: {
	        sassDir: 'public/assets/sass/',
	        cssDir: 'public/assets/css/',
	        imagesDir: 'public/assets/images/',
	        fontsDir: 'public/assets/fonts/',
	        outputStyle: 'expanded',
	        generatedImagesDir: '/public/assets/images/sprites/',
	        relativeAssets: true
	      }
	    }
	  },
    cssmin: {
      combine: {
        files: {
          'public/assets/css/style.css': ['public/assets/css/*.css']
        }
      }
    },
	  watch: {
      css: {
	  		files: ['public/assets/sass/**/*.scss'],
	  		tasks: [
          'compass',
        ],
        options: {
          livereload: true
        }
	  	}
    }
  });

  grunt.registerTask('build', [
    'compass',
    'cssmin'
  ]);
  grunt.registerTask('serve', [
    'connect:server',
    'watch'
  ]);
}
