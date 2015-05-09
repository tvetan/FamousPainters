var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename');

gulp.task('default', function () {
    return gulp.src(['scripts/libs/jquery-2.1.3.min.js','scripts/painter.js', 'scripts/painters.js', 'scripts/paintersLoader.js', 'scripts/renderer.js', 'scripts/app.js'])
        .pipe(concat('concat.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('8420D24126AC40FA9168195E0F8D1C48.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});