var postcss = require('gulp-postcss');
var gulp = require('gulp');
var atImport = require('postcss-import');
var htmlrender = require('gulp-htmlrender');



// ********
// different tasks that can be triggered
// ********
gulp.task('css', function () {

  const config = (file) => ({
          plugins: [
              require('postcss-import')({ root: '../src/css *' }),
              require('precss'),
              require('postcss-cssnext'),
              require('postcss-write-svg')
          ]
      });

      var rs = gulp.src('../src/css/main.css') /** ** /*.* */
          .pipe(postcss(config))
          .pipe(gulp.dest('../dist/assets/css/'));

      rs = gulp.src('../src/css/kapitel/03.css') /** should be removed - too lazy** /*.* */
           .pipe(postcss(config))
           .pipe(gulp.dest('../dist/assets/kapitel/03/css/'));

           rs = gulp.src('../src/css/kapitel/04.css') /** should be removed - too lazy i am ** /*.* */
               .pipe(postcss(config))
               .pipe(gulp.dest('../dist/assets/kapitel/04/css/'));
/*

               rs = gulp.src('../src/css/kapitel/05.css')
                   .pipe(postcss(config))
                   .pipe(gulp.dest('../dist/assets/kapitel/04/css/'));



                   rs = gulp.src('../src/css/kapitel/06.css')
                       .pipe(postcss(config))
                       .pipe(gulp.dest('../dist/assets/kapitel/06/css/'));

*/

      return rs;
});

/**
do nothing - just copy them to the dist folder
*/
gulp.task('js', function () {
    return gulp.src('../src/js/**/*.*')
        .pipe(gulp.dest('../dist/assets/js/'));
});

/**
replace partials then copy to dist
*/
gulp.task('html', function () {
    return gulp.src('../src/html/*.html', {read: false})
        .pipe(htmlrender.render())
        .pipe(gulp.dest('../dist/'));
});



// Watch Files For Changes . if something happenes (a file is saved) gulp triggers an action
gulp.task('watch', function() {
    gulp.watch('../src/css/**/*.*', ['css']);
    gulp.watch('../src/js/**/*.*', ['js']);
    gulp.watch('../src/html/**/*.html', ['html']);
});

//the default task that is triggered when gulp is executed
gulp.task('default', ['css','js','html']);
