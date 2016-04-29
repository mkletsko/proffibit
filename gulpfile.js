var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect'),
    dest = require('gulp-dest'),
    notify = require("gulp-notify"),
    concatCSS = require('gulp-concat-css'),
    less = require('gulp-less'),
    watch = require('gulp-watch'),
    jade = require('gulp-jade');

//html
gulp.task('html', function(){
    return gulp.src('build/development/index.html')
        .pipe(watch('build/development/index.html'))
        .pipe(connect.reload());
});

//less
gulp.task('less', function () {
    return gulp.src('src/less/*.less')
        .pipe(watch('src/less/*.less'))
        .pipe(less())
        .pipe(gulp.dest('build/development/css'))
        .pipe(notify('Done!'));
});

//css
gulp.task('css', function () {
    return gulp.src('build/development/css/*.css')
        .pipe(watch('build/development/css/*.css'))
        .pipe(connect.reload());
});

//connect
gulp.task('connect', function() {
    connect.server({
        root: '',
        livereload: true
    });
});

//gulp-default
gulp.task('default', ['html', 'connect', 'less', 'css']);