var gulp = require('gulp');
var browserify = require('browserify');
var riotify = require('riotify');
var source = require('vinyl-source-stream');

gulp.task('browserify', function () {
  return browserify({
    debug: true,
    entries: ['./scripts/main.js'],
    transform: [riotify]
  }).bundle()
    .pipe(source('main.bundle.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['browserify']);