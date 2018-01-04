var postcss = require('gulp-postcss');
var gulp = require('gulp');
var atImport = require('postcss-import');
var htmlrender = require('gulp-htmlrender');




gulp.task('css', function () {

  const config = (file) => ({
          plugins: [
              require('postcss-import')({ root: './src/css *' }),
              require('precss'),
              require('postcss-cssnext'),
              require('postcss-write-svg')
          ]
      });

    return gulp.src('./src/css/main.css') /** ** /*.* */
        .pipe(postcss(config))
        .pipe(gulp.dest('../inc/assets/css/'));
});

gulp.task('js', function () {
    return gulp.src('./src/js/**/*.*')
        .pipe(gulp.dest('../inc/assets/js/'));
});

gulp.task('html', function () {
    return gulp.src('./src/html/*.html', {read: false})
        .pipe(htmlrender.render())
        .pipe(gulp.dest('../static_pages/'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('./src/css/**/*.*', ['css']);
    gulp.watch('./src/js/**/*.*', ['js']);
    gulp.watch('./src/html/**/*.html', ['html']);
});

gulp.task('default', ['css','js','html']);
