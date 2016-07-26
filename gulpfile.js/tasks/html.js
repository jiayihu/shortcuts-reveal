var config       = require('../config');

var browserSync  = require('browser-sync');
var gulp         = require('gulp');
var path         = require('path');

var paths = {
  src: path.join(config.root.src, config.tasks.html.src, '/**/*.html'),
  dest: path.join(config.root.dest, config.tasks.html.dest)
};

var htmlTask = function() {

  return gulp.src(paths.src)
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.stream());
};

gulp.task('html', htmlTask);
