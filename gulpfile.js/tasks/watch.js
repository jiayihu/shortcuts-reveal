const config = require('../config.json');
const gulp = require('gulp');
const path = require('path');

const watchTask = function () {
  const watchableTasks = ['css', 'html', 'images', 'svgSprite', 'static'];

  watchableTasks.forEach(function (taskName) {
    const task = config.tasks[taskName];
    if (task) {
      const glob = [];
      task.extensions.forEach(function (extension) {
        glob.push(path.join(config.root.src, task.src, '**/*.' + extension));
      });
      gulp.watch(glob, [taskName]);
    }
  });
};

gulp.task('watch', ['browserSync'], watchTask);
