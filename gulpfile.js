var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    livereload = require('gulp-livereload');


gulp.task('sass', function() {
    
});


gulp.task('ts', function () {
    return gulp.src('TS/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(ts({
            noImplicitAny: true,
            outFile: 'main.js',
            module: "system",
            target: "es6"
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('public/js'))
        .pipe(livereload());
});

gulp.task("watch", function () {
    livereload.listen();
    gulp.watch(["./TS/**/*.ts"], ["ts"]);
});