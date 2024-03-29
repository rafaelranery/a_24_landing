const gulp = require('gulp');
// importando plugins para sass compress
const sass = require('gulp-sass')(require('sass'));
// image minifier (lembrar que a função que ainda aceita importação por require() é 7.1.0)
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
// html minify
const htmlmin = require('gulp-htmlmin');
const { parallel, series } = require('gulp');
// image resize for movie posters
const imgResize = require('gulp-image-resize');

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/styles'));
};

function images() {
    return gulp.src('./src/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'));
}

function scripts() {
    return gulp.src('./src/script/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/script'))
}

function html() {
    return gulp.src('./src/index.html')
        .pipe(htmlmin())
        .pipe(gulp.dest('./dist'))
}

function resize() {
    return gulp.src('./src/img/movies/*')
        .pipe(imgResize({
            width: 308,
            height: 456.14,
        }))
        .pipe(gulp.dest('./src/img/movies/resized'))
}

exports.styles = styles;
exports.images = images;
exports.scripts = scripts;
exports.html = html;
exports.resize = resize;

gulp.task('build', series(images, parallel(styles, scripts, html)));
gulp.task('watch', function() {
    gulp.watch('./src/styles/*.scss', {ignoreInitial: false}, styles);
    gulp.watch('./src/img/**/*', {ignoreInitial: false}, images);
    gulp.watch('./src/script/*.js', {ignoreInitial: false}, scripts);
    gulp.watch('./src/index.html', {ignoreInitial: false}, html); 
})