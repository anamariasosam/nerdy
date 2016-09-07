var gulp = require('gulp')
  , plugins = require('gulp-load-plugins')();

var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('browser-sync', function() {
  browserSync.init({
    notify: false,
    open: true,
    port: 9000,
    server: { baseDir: "./dist" },
  });

  gulp.watch(['dist/*.html'])
    .on('change', browserSync.reload);

  gulp.watch(['dist/scripts/*.js'])
    .on('change', browserSync.reload);

});

gulp.task('sass', function () {
  return plugins.rubySass('app/sass/main.scss', {
      style: 'expanded',
      lineNumbers: true
  })
  .on('error', function (err) { console.log(err.message); })
  .pipe(gulp.dest('dist/styles'))
  .pipe(browserSync.reload({stream: true}));
});

// Convert Jade to HTML
gulp.task('views', function () {
  return gulp.src('app/*.jade')
    .pipe(plugins.jade({ pretty: true }))
    .on('error', plugins.notify.onError(function (err) { console.log(err.message); return "💔 Jade Error "; }))
    .pipe(gulp.dest('dist'))
});
// Concat the javascript
gulp.task('javascript', function () {
  return gulp.src('app/javascript/*.js')
    .pipe(plugins.concat('all.js'))
    .pipe(gulp.dest('dist/scripts'))
});

gulp.task('watch', function () {
  gulp.watch(['./app/*.jade'], ['views']);
  gulp.watch(['./app/views/**/*.jade'], ['views']);
  gulp.watch(['./app/sass/**/*.scss'], ['sass']);
  gulp.watch(['./app/javascript/**/*.js'], ['javascript']);

});

gulp.task("default", ["browser-sync", "views", "sass", "javascript", "watch"]);