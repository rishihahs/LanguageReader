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
                    "app/assets/js/templates/spanish.template.js": "app/assets/templates/spanish.hbs"
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
        ]
    });

    // Load tasks from NPM
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');

    // Default task.
    grunt.registerTask('default', ['handlebars', 'requirejs', 'htmlmin', 'cssmin', 'clean']);

};