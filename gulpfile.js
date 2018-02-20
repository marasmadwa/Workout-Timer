const gulp = require("gulp");
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const gutil = require('gulp-util');

const showErrors = function (err) {
    console.log(gutil.colors.red(err.toString()));
    this.emit('end');
};

gulp.task('sass', function () {
    return gulp.src('./scss/main.scss')//Weź
        .pipe(plumber({
            errorHandler: showErrors
        }))//trzeba dodoac klamerki do ustawiania parametrów
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: "compressed"
        }))//skompiluj
        .pipe(autoprefixer({ //dodajemy po kompilacji!
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./css'))//zapisz w folderze
});

gulp.task('watch', function () {
    gulp.watch('./scss/**/*.scss', ['sass']);
});

gulp.task('default', function () {
    console.log('-------start pracy -----------');
    gulp.start(["sass", "watch"]);
});