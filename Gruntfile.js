/*global module:false*/
'use strict';

var opt = require('./options');

module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({

        clean: {
            release: 'release'
        },

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

        cssmin: {
            compile: {
                files: {
                    'release/assets/css/main.css': 'release/assets/css/main.css'
                }
            }
        }
    });

    // Load tasks from NPM
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default task.
    grunt.registerTask('default', ['clean', 'handlebars', 'requirejs', 'cssmin']);

};