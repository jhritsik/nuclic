'use strict';

module.exports = function (grunt) {
  // Show elapsed time after tasks run
  require('time-grunt')(grunt);
  // Load all Grunt tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    // Configurable paths
    yeoman: {
      app: 'app',
      dist: 'dist'
    },
    site: grunt.file.readYAML('_config.yml'),

    watch: {
      sass: {
        files: ['<%= yeoman.app %>/_scss/**/*.{scss,sass}'],
        tasks: ['sass:server', 'autoprefixer:server']
      },
      autoprefixer: {
        files: ['<%= yeoman.app %>/assets/css/**/*.css'],
        tasks: ['copy:stageCss', 'autoprefixer:server']
      },
      assemble: {
        files: '<%= yeoman.app %>/**/*.{html,yml,md,mkd,markdown}',
        tasks: ['assemble:server']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '.assemble/**/*.html',
          '.tmp/**/*.css',
          '<%= yeoman.app %>/assets/**/*.{css,js,gif,jpg,jpeg,png,svg,webp}'
        ]
      }
    },
    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        // use this http://192.168.XXX.XXX.xip.io/, with this, to use Adobe Edge Inspect
        // change this to '0.0.0.0' to access the server from outside
        // hostname: '0.0.0.0'
        // hostname: '192.168.197.198.xip.io'
        //hostname: 'isp.dev.nationalgeographic.com'
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: true,
          base: [
            '.tmp',
            '.assemble',
            '<%= yeoman.app %>' // final array item is used as working server directory
          ]
        }
      },
      dist: {
        options: {
          open: true,
          base: [
            '<%= yeoman.dist %>'
          ]
        }
      },
      test: {
        options: {
          base: [
            '.tmp',
            '.assemble',
            'test',
            '<%= yeoman.app %>'
          ]
        }
      }
    },
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '<%= yeoman.dist %>/*',
            '!<%= yeoman.dist %>/.git*'
          ]
        }]
      },
      server: [
        '.tmp',
        '.assemble'
      ]
    },
    sass: {
      options: {
        bundleExec: true,
        loadPath: 'app/assets/bower_components'
      },
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/_scss',
          src: '**/*.{scss,sass}',
          dest: '.tmp/assets/css',
          ext: '.css'
        }]
      },
      server: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/_scss',
          src: '**/*.{scss,sass}',
          dest: '.tmp/assets/css',
          ext: '.css'
        }]
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 versions']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/assets/css',
          src: '**/*.css',
          dest: '<%= yeoman.dist %>/assets/css'
        }]
      },
      server: {
        files: [{
          expand: true,
          cwd: '.tmp/assets/css',
          src: '**/*.css',
          dest: '.tmp/assets/css'
        }]
      }
    },
    assemble: {
      options: {
        site: '<%= site %>',
        flatten: true,
        assets: '<%= yeoman.app %>/assets',
        layoutdir: '<%= yeoman.app %>/_layouts',
        layoutext: '.html',
        partials: '<%= yeoman.app %>/{_content,_includes}/*.{hbs,html,md}',
      },
      server: {
        files: [
          {src: ['<%= yeoman.app %>/_pages/*.{hbs,html}'], dest: '.assemble/'}
        ]
      },
      dist: {
        files: [
          {src: ['<%= yeoman.app %>/_pages/*.{hbs,html}'], dest: '<%= yeoman.dist %>/'}
        ]  
      }
    },
    useminPrepare: {
        options: {
            dest: '<%= yeoman.dist %>',
            // disable uglification here along with removing tasks below
            flow: {
                steps: {
                    js: ['concat'],
                    css: ['concat']
                },
                post: {}
            }
        },
        html: ['<%= yeoman.dist %>/**/*.html']
    },

    usemin: {
      options: {
        assetsDirs: '<%= yeoman.dist %>',
        flow: {
          steps: {
            jquery: ['concat']
          },
          post: {}
        },
        blockReplacements: {
          jquery: function(block) {
            // not currently used
            return '<script>window.jQuery || document.write(\'<script src="' + block.dest + '"><\\/script>\')</script>'
          }
        }
      },
      html: ['<%= yeoman.dist %>/**/*.html'],
      css: ['<%= yeoman.dist %>/assets/css/**/*.css']
    },
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true,
          collapseBooleanAttributes: false,
          removeAttributeQuotes: false,
          removeRedundantAttributes: false
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: ['**/*.html', '!assets/bower_components/**/*.html'],
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    // Usemin adds files to concat
    concat: {
        options: {
            separator: ';\n',
        },
    },

    // Usemin adds files to uglify
    uglify: {
      options: {
        preserveComments: 'some',
        beautify:false,
        mangle: true
      }
    },
    // Usemin adds files to cssmin
    cssmin: {
      dist: {
        options: {
          check: 'gzip'
        },
      }
    },
    imagemin: {
      dist: {
        options: {
          progressive: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: '**/*.png',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          src: [
            // Assemble processes and moves HTML and text files.
            // Usemin moves CSS and javascript inside of Usemin blocks.
            // Copy moves asset files and directories.
            'assets/**/*', // everything in assets
            '!assets/js/**/*', // except js 
            '!assets/bower_components/**/*', // except bower components -- usemin consolidates to /js locations
            'assets/bower_components/jquery/dist/jquery.min.js', // this is only here because "window.jQuery || ..." has to exist outside of usemin blocks
            '!assets/css/**/*', // except css
            // Like Jekyll, exclude files & folders prefixed with an underscore.
            '!**/_*{,/**}',
            //'favicon.ico',
            //'apple-touch*.png'
          ],
          dest: '<%= yeoman.dist %>'
        }]
      },
      // Copy CSS into .tmp directory for Autoprefixer processing
      stageCss: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>/assets/css',
          src: '**/*.css',
          dest: '.tmp/assets/css'
        }]
      }
    },
    buildcontrol: {
      dist: {
        options: {
          commit: true,
          push: true,
          remote: 'git@github.com:natgeo/specialprojects-boilerplate.git',
          dir: '<%= yeoman.dist %>',
          branch: 'static',
          message: 'Built %sourceName% pages from commit %sourceCommit% on branch %sourceBranch%'
        }
      }
    },
    validation: {
      options: {
          reset: true,
          reportpath: '.log/validation-report.json',     
          path: '.log/validation-status.json',          
          doctype: "HTML5",

      },      
      layouts: {
        files: {
            src: ['<%= yeoman.app %>/_layouts/*.html']
        }

      },
      content: {
        options: {
            wrapfile: '<%= yeoman.app %>/_layouts/empty.html',
            relaxerror: ["End tag for  body seen, but there were unclosed elements."]
        },
        files: {
            src: ['<%= yeoman.app %>/_content/*.html']
        }
      },
      includes: {
        options: {
            wrapfile: '<%= yeoman.app %>/_layouts/empty.html'
        },
        files: {
            src: ['<%= yeoman.app %>/_includes/*.html']
        }
      }
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        '<%= yeoman.app %>/assets/js/**/*.js',
      ]
    },
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      check: {
        src: [
          '<%= yeoman.app %>/assets/css/**/*.css',
          '<%= yeoman.app %>/_scss/**/*.scss'
        ]
      }
    },
    concurrent: {
      server: [
        'sass:server',
        'copy:stageCss',
        'assemble:server'
      ],
      dist: [
        'sass:dist',
        'copy:dist',
        'assemble:dist',
      ]
    }
  });

  // Define Tasks
  grunt.registerTask('serve', function (target) {
    if (target === 'build') {
      return grunt.task.run(['build', 'connect:dist:keepalive', 'watch']);
    } else {
      return grunt.task.run(['dev', 'connect:livereload', 'watch']);
    }
  });

  grunt.registerTask('dev', [
      'clean:server',
      'concurrent:server',
      'autoprefixer:server'
    ]);


  grunt.registerTask('build', [
    'clean',
    'concurrent:dist',
    'useminPrepare',
    'concat',
    'autoprefixer:dist',
    // 'cssmin',
    // 'uglify',
    'imagemin',
    'usemin',
    'htmlmin'
    ]);

  // Test HTML, CSS, everything
  grunt.registerTask('check', [
    'clean:server',
    'assemble:server',
    'sass:server',
    'jshint:all',
    'csslint:check',
    'validation:content',
    'validation:includes',
  ]);

  grunt.registerTask('validate', [
    'validation:content' // html validator
  ])


  grunt.registerTask('deploystatic', [
    'clean',
    'concurrent:dist',
    'autoprefixer:dist',
    'buildcontrol'
    ]);

  grunt.registerTask('default', function() {
    return grunt.task.run('serve');
  });
};
