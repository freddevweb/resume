var gulp = require('gulp'),
    ts = require('gulp-typescript'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    livereload = require('gulp-livereload');
const { SourceMap } = require('node:module');


gulp.task('sass', function() {
    return gulp.src('./assets/sass/**/*.scss')
        .pipe(sourcemaps.inig())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public/css'))
        .pipe(livereload());
});

gulp.task('ts', function () {
    return gulp.src('./assets/app/**/*.ts')
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