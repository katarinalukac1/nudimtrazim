var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var sassLint = require('gulp-sass-lint');

//scss to css task
gulp.task('scss', function() {
    return gulp.src('src/scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
});

//scss lint
gulp.task('scss-lint', function() {
    return gulp.src('src/scss/*.scss')
    .pipe(sassLint({
        configFile: '.sass-lint.yml'
    }))
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
});

//watch task
gulp.task('watch', gulp.series('scss', function () {
  gulp.watch('src/**/*.scss', gulp.series('scss'));
}));