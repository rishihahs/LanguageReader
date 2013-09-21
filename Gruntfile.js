/*global module:false*/
'use strict';

var opt = require('./options');

module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({

        handlebars: {
            compile: {
                options: {
                    amd: true,
                    processName: function(filePath) {
                        return filePath.split('/').pop();
                    }
                },
                files: {
                    "app/assets/js/templates/foreignlanguage.template.js": "app/assets/templates/foreignlanguage.hbs",
                    "app/assets/js/templates/wordsmissed.template.js": "app/assets/templates/wordsmissed.hbs"
                }
            }
        },

        compass: {
            dist: {
                options: {
                    config: 'compass.rb'
                }
            }
        },

        requirejs: {
            compile: {
                options: opt
            }
        },

        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'release/index.html': 'release/index.html',
                    'release/review.html': 'release/review.html'
                }
            }
        },

        cssmin: {
            compile: {
                files: {
                    'release/assets/css/main.css': 'release/assets/css/main.css',
                    'release/assets/css/aloha.css': 'release/assets/css/aloha.css'
                }
            }
        },

        clean: [
            'release/assets/templates/**',
            'release/assets/scss/**'
        ],

        jshint: {
            options: {
                jshintrc: '.jshintrc',
                ignores: ['app/assets/js/vendor/*.js', 'app/assets/js/templates/*.js']
            },
            all: ['app/assets/js/**/*.js']
        }
    });

    // Load tasks from NPM
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // Default task.
    grunt.registerTask('default', ['handlebars', 'compass', 'requirejs', 'htmlmin', 'cssmin', 'clean']);

};