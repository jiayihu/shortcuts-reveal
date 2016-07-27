const gulp = require('gulp');
const runSequence = require('run-sequence');

const defaultTask = function () {
  runSequence(
    ['html', 'css', 'webpage', 'scripts'],
    ['fonts', 'images', 'static'],
    'watch'
  );
};

gulp.task('default', defaultTask);
