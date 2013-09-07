//The build will inline common dependencies into this file.

requirejs.config({
    baseUrl: './assets/js',
    paths: {
        'jquery': 'vendor/jquery-1.9.1.min',
        'foundation': 'vendor/foundation.min',
        'jquery.popover': 'vendor/jquery.popover',
        'handlebars': 'vendor/handlebars'
    },
    shim: {
        'foundation': {
            deps: ['jquery']
        },
        'jquery.popover': {
            deps: ['jquery']
        },
        'handlebars': {
            exports: 'Handlebars'
        }
    }
});