const gulp = require('gulp');
const runSequence = require('run-sequence');

const productionTask = function () {
  runSequence(
    'clean',
    ['fonts', 'static'],
    ['html', 'css', 'content-script', 'scripts']
  );
};

gulp.task('production', productionTask);
