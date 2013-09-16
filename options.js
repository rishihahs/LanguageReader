module.exports = {
    appDir: 'app',
    baseUrl: 'assets/js/',
    mainConfigFile: 'app/assets/js/common.js',
    dir: 'release',
    modules: [
        // First set up the common build layer.
        {
            // module names are relative to baseUrl
            name: 'common',
            // List common dependencies here. Only need to list
            // top level dependencies, 'include' will find
            // nested dependencies.
            include: [
                'jquery',
                'foundation',
                'jstorage',
                'shared'
            ]
        },

        // Now set up a build layer for each main layer, but exclude
        // the common one. If you're excluding a module, the excludee
        // must appear before the excluder in this file. Otherwise it will
        // get confused.
        {
            name: 'read/main',
            exclude: ['common', 'aloha']
        },

        {
            name: 'review/main',
            exclude: ['common']
        }
    ]
};