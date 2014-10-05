module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jasmine: {
            test: {
                src: [
                    'bower_components/jasmine/lib/jasmine-core/jasmine.js',
                    'bower_components/jasmine/lib/jasmine-core/jasmine-html.js',
                    'bower_components/jasmine/lib/jasmine-core/boot.js',
                    'src/**/*.js'
                ],
                options: {
                    specs: 'test/**/*.spec.js',
                    display: 'short',
                    summary: true
                }
            }
        },
        watch: {
            files: ['src/**/*.js', 'test/**/*.spec.js'],
            tasks: ['jasmine']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['jasmine']);

};