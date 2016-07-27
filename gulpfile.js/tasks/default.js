const gulp = require('gulp');
const runSequence = require('run-sequence');

const defaultTask = function () {
  runSequence(
    ['html', 'css', 'content-script', 'scripts'],
    ['images', 'static'],
    'watch'
  );
};

gulp.task('default', defaultTask);
