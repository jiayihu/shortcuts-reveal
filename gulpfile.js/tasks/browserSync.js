var browserSync = require('browser-sync');
var config      = require('../config');
var gulp        = require('gulp');

var options = config.tasks.browserSync;

var browserSyncTask = function() {
  return browserSync(options);
};

gulp.task('browserSync', browserSyncTask);
