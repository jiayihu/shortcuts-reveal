const config = require('../config.json');

const watchify = require('watchify');
const gulp = require('gulp');
const browserify = require('browserify');
const uglify = require('gulp-uglify');
const gulpif = require('gulp-if');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const path = require('path');

const paths = {
  src: path.join(config.root.src, config.tasks.scripts.src, config.tasks.scripts.contentScript),
  dest: path.join(config.root.dest, config.tasks.scripts.dest),
};

const isProduction = process.env.NODE_ENV === 'production';

const customOpts = {
  cache: {},
  debug: !isProduction,
  entries: paths.src,
  packageCache: {},
  transform: [
    ['babelify', { presets: ['es2015'] }],
    ['browserify-shim'],
  ],
};
const appBundle = browserify(customOpts);
appBundle.plugin(watchify);

const buildApp = function () {
  return appBundle
    .bundle()
    .on('error', console.log)
    .pipe(source('content-script.js'))
    .pipe(buffer())
    .pipe(gulpif(isProduction, uglify()))
    .on('error', console.log)
    .pipe(gulp.dest(paths.dest));
};

appBundle.on('update', buildApp);

gulp.task('content-script', buildApp);
