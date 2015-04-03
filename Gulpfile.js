var gulp = require('gulp');
var browserify = require('browserify');
var riotify = require('riotify');
var transform = require('vinyl-transform');
var buffer = require('gulp-buffer');

gulp.task('browserify', function () {
  // set up the browserify instance on a task basis
  var b = browserify({debug: true});
  // transform regular node stream to gulp (buffered vinyl) stream
  var browserified = transform(function(filename) {
    b.add(filename);
    return b.bundle();
  });

  return gulp.src('./main.js')
    .pipe(browserified)
    .pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['browserify']);