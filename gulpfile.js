'use strict';

var gulp = require('gulp');
var componentHelper = require('gulp-component-helper')(gulp);
var paths = componentHelper.paths;
var runSequence = require('run-sequence');

gulp.task('test', function(cb){
    //no tests for this project yet
    return cb();
});