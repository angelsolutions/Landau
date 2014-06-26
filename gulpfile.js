var gulp = require('gulp');
var compass = require('gulp-compass');
var watch = require('gulp-watch');
var livereload = require('gulp-livereload');
//var uglify = require('gulp-uglify');
//var jshint = require('gulp-jshint');
//var concat = require('gulp-concat');

var devpath = 'dev/'
var buildpath = './'


//Build all of the javascript
gulp.task('compass', function() {
  gulp.src(devpath+'scss/*.scss')
  .pipe(compass({
    config_file: devpath+'scss/config.rb',
    css: buildpath+'css',
    sass: devpath+'scss'
  }))
  .pipe(gulp.dest(devpath+'scss'));
});

//Minify all of the javascript
gulp.task('minify', function () {
   gulp.src(devpath+'js/**/*.js')
      .pipe(uglify())
      .pipe(gulp.dest(devpath+'js'))
});

gulp.task('js', function () {
   return gulp.src('js/*.js')
      .pipe(jshint())
      .pipe(jshint.reporter('default'))
      .pipe(filesize())
      .pipe(uglify())
      .pipe(filesize())
      .pipe(concat('main.js'))
      .pipe(gulp.dest(buildpath+'js'));
});

//gulp.task('watch', function() {
    //gulp.watch('dev/js/*.js', ['js']);
    //gulp.watch('dev/scss/**/*.scss', ['compass']);
    //gulp.watch('dev/images/**/*', ['images']);
//});

gulp.task('watch', function() {

  gulp.watch('dev/scss/**/*.scss', ['compass']);

  // Create LiveReload server
  //var server = livereload();

  // Watch any files in dist/, reload on change
  //gulp.watch(['css/**/*']).on('change', function(file) {
    //server.changed(file.path);
  //});

});

gulp.task('default', function () {
   compass
});