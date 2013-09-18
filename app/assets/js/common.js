//The build will inline common dependencies into this file.

requirejs.config({
    baseUrl: './assets/js',
    paths: {
        'jquery': 'vendor/jquery-1.9.1.min',
        'foundation': 'vendor/foundation.min',
        'jquery.popover': 'vendor/jquery.popover',
        'jstorage': 'vendor/jstorage',
        'handlebars': 'vendor/handlebars',
        'shared': 'shared'
    },
    shim: {
        'foundation': {
            deps: ['jquery']
        },
        'jquery.popover': {
            deps: ['jquery']
        },
        'jstorage': {
            deps: ['jquery']
        },
        'handlebars': {
            exports: 'Handlebars'
        }
    }
});