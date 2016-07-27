const gulp = require('gulp');
const runSequence = require('run-sequence');

const productionTask = function () {
  runSequence(
    'clean',
    ['fonts', 'images', 'static'],
    ['html', 'css', 'scripts']
  );
};

gulp.task('production', productionTask);
