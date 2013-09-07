//The build will inline common dependencies into this file.

requirejs.config({
    baseUrl: './assets/js',
    paths: {
        'jquery': 'vendor/jquery-1.9.1.min',
        'foundation': 'vendor/foundation.min',
        'jquery.popover': 'vendor/jquery.popover',
        'Handlebars': 'vendor/Handlebars',
        'hbs': 'vendor/hbs',
        'underscore': 'vendor/hbs/underscore',
        'json2': 'vendor/hbs/json2',
        'i18nprecompile': 'vendor/hbs/i18nprecompile'
    },
    shim: {
        'foundation': {
            deps: ['jquery']
        },
        'jquery.popover': {
            deps: ['jquery']
        },
        'Handlebars': {
            exports: 'Handlebars'
        }
    },
    hbs: {
        disableI18n: true, // This disables the i18n helper and
        // doesn't require the json i18n files (e.g. en_us.json)
        // (false by default)

        disableHelpers: true, // When true, won't look for and try to automatically load
        // helpers (false by default)
    }
});