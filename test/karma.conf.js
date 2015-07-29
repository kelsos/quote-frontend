// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2015-05-24 using
// generator-karma 1.0.0

module.exports = function(config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: '../',

    // testing framework to use (jasmine/mocha/qunit/...)
    // as well as any additional frameworks (requirejs/chai/sinon/...)
    frameworks: [
      "jasmine"
    ],

    // list of files / patterns to load in the browser
    files: [
      // bower:js
      'bower_components/angular/angular.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-cookies/angular-cookies.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-sanitize/angular-sanitize.js',
      'bower_components/angular-touch/angular-touch.js',
      'bower_components/angular-aria/angular-aria.js',
      'bower_components/angular-material/angular-material.js',
      'bower_components/angular-jwt/dist/angular-jwt.js',
      'bower_components/lodash/lodash.js',
      'bower_components/restangular/dist/restangular.js',
      'bower_components/angular-linkify/angular-linkify.js',
      'bower_components/rxjs/dist/rx.all.js',
      'bower_components/rxjs/dist/rx.all.min.js',
      'bower_components/rxjs/dist/rx.all.compat.js',
      'bower_components/rxjs/dist/rx.all.compat.min.js',
      'bower_components/rxjs/dist/rx.js',
      'bower_components/rxjs/dist/rx.min.js',
      'bower_components/rxjs/dist/rx.compat.js',
      'bower_components/rxjs/dist/rx.compat.min.js',
      'bower_components/rxjs/dist/rx.aggregates.js',
      'bower_components/rxjs/dist/rx.aggregates.min.js',
      'bower_components/rxjs/dist/rx.async.js',
      'bower_components/rxjs/dist/rx.async.min.js',
      'bower_components/rxjs/dist/rx.async.compat.js',
      'bower_components/rxjs/dist/rx.async.compat.min.js',
      'bower_components/rxjs/dist/rx.backpressure.js',
      'bower_components/rxjs/dist/rx.backpressure.min.js',
      'bower_components/rxjs/dist/rx.binding.js',
      'bower_components/rxjs/dist/rx.binding.min.js',
      'bower_components/rxjs/dist/rx.coincidence.js',
      'bower_components/rxjs/dist/rx.coincidence.min.js',
      'bower_components/rxjs/dist/rx.experimental.js',
      'bower_components/rxjs/dist/rx.experimental.min.js',
      'bower_components/rxjs/dist/rx.lite.js',
      'bower_components/rxjs/dist/rx.lite.min.js',
      'bower_components/rxjs/dist/rx.lite.compat.js',
      'bower_components/rxjs/dist/rx.lite.compat.min.js',
      'bower_components/rxjs/dist/rx.joinpatterns.js',
      'bower_components/rxjs/dist/rx.joinpatterns.min.js',
      'bower_components/rxjs/dist/rx.testing.js',
      'bower_components/rxjs/dist/rx.testing.min.js',
      'bower_components/rxjs/dist/rx.time.js',
      'bower_components/rxjs/dist/rx.time.min.js',
      'bower_components/rxjs/dist/rx.virtualtime.js',
      'bower_components/rxjs/dist/rx.virtualtime.min.js',
      'bower_components/angular-rx/dist/rx.angular.js',
      'bower_components/angular-messages/angular-messages.js',
      'bower_components/angular-mocks/angular-mocks.js',
      // endbower
      "app/scripts/**/*.js",
      "test/mock/**/*.js",
      "test/spec/**/*.js"
    ],

    // list of files / patterns to exclude
    exclude: [
    ],

    // web server port
    port: 8080,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      "PhantomJS"
    ],

    // Which plugins to enable
    plugins: [
      "karma-phantomjs-launcher",
      "karma-jasmine"
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'
  });
};
