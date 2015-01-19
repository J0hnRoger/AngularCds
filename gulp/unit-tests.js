'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep');

gulp.task('test', function() {
  var bowerDeps = wiredep({
    directory: 'bower_components',
    exclude: ['bootstrap-sass-official'],
    dependencies: true,
    devDependencies: true
  });

  var testFiles = bowerDeps.js.concat([
    /*Testing library*/
    'bower_components/sinon/lib/sinon.js',
    /*External Modules */
    'bower_components/angular-ui/angular-ui.min.js',
    'bower_components/angular-mocks/angular-mocks.js',
    'bower_components/jquery-ui/jquery-ui.min.js',
    'bower_components/underscore/underscore-min.js',
    'bower_components/angular-ui/angular-ui',
    'bower_components/firebase/firebase.js',
    'bower_components/angular-firebase/angularfire.min.js',
    'bower_components/ui.bootstrap/ui-bootstrap-tpls.min.js',
    'bower_components/ui.bootstrap/ui-bootstrap.min.js',
    'bower_components/toaster/toaster.js',
    /*App files */
    'src/app/index.js',
    'src/app/directives/app.directives.js',
    'src/app/timer/timer.js',
    'src/components/**/*.js',
    'src/app/**/*.js'
  ]);

  return gulp.src(testFiles)
    .pipe($.karma({
      configFile: 'karma.conf.js',
      action: 'watch'
    }))
});
