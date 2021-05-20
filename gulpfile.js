var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    jsonConcat = require('gulp-json-concat'),
    livereload = require('gulp-livereload'),
    cleanCss = require('gulp-clean-css');

var files = {
    sass: {
        soucres: './local/sass/*.scss',
        dest: './public/css'
    },
    js: {
        sources: [
            './local/src/presentation/Presentation.js',
            './local/src/experience/Experience.js',
            './local/src/experience/Experiences.js',
            './local/src/skill/Skill.js',
            './local/src/skill/Skills.js',
            './local/src/training/Training.js',
            './local/src/training/Trainings.js',
            './local/src/App.js',
            './local/src/main.js',

        ],
        dest: './public/js'
    },
    json: {
        sources: './local/datas/**/*.json',
        dest: './public/js/json'
    },
    html: {
        sources: './**/*.html'
    }
};

gulp.task('html', function () {
    gulp.src(files.html.sources)
        .pipe(livereload());
});

gulp.task('sass', function () {
    return gulp.src(files.sass.soucres)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCss())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(files.sass.dest))
        .pipe(livereload());
});

gulp.task('json', function () {
    return gulp.src(files.json.sources)
        .pipe(sourcemaps.init())
        .pipe(jsonConcat('db.json', function (data) {
            return new Buffer(JSON.stringify(data));
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(files.json.dest))
        .pipe(livereload());
});

gulp.task('js', function () {
    return gulp.src(files.js.sources)
        .pipe(sourcemaps.init())
        .pipe(concat('main.js')
            .on('error', function () {
                console.error(error);
            }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(files.js.dest))
        .pipe(livereload());
});

gulp.task("watch", function () {
    livereload.listen(
        // { port: 35733}
    );
    gulp.watch(files.js.sources, gulp.series("js"));
    gulp.watch('./local/sass/**/*.scss', gulp.series("sass"));
    gulp.watch(files.json.sources, gulp.series("json"));
    gulp.watch(files.html.sources, gulp.series("html"));
});