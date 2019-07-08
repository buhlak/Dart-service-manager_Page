'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const include = require('gulp-include');
const prefixer = require('gulp-autoprefixer');
const terser = require('gulp-terser');
const sourcemaps = require('gulp-sourcemaps');
const cssmin = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const path = {
    build: {
        html: 'dist/',
        js: 'dist/js/',
        css: 'dist/css/',
        img: 'dist/img/',
        root: 'dist/'
    },
    src: {
        indexJs: 'src/js/index.js',
        scss: 'src/css/scss/index.scss',
        css: 'src/css/*.css',
        img: 'src/img/**/*.*',
        indexHtml: 'src/index.html',
        libs: 'src/libs/**',
        video: 'src/video/**'
    },
    // watch: {
    //     html: 'src/**/*.html',
    //     js: 'src/js/**/*.js',
    //     style: 'src/style/**/*.scss',
    //     img: 'src/img/**/*.*',
    //     fonts: 'src/fonts/**/*.*'
    // },
    clean: './build'
};

gulp.task('sass', function () {
    return gulp.src('./src/css/scss/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/css/'));
});

// gulp.task('include', function () {
//     gulp.src('./src/js/index.js')
//         .pipe(include({
//             extensions: 'js',
//             hardFail: true,
//             separateInputs: true,
//             includePaths: [
//                 '/src/js/*.js'
//             ]
//         }))
//         .on('error', console.log)
//         .pipe(gulp.dest('dist/js'))
// });

gulp.task('sass:watch', function () {
    gulp.watch(['./src/css/scss/**/*.scss', './src/css/scss/*.scss'], ['sass']);
});

gulp.task('js:build', function () {
    return gulp.src(path.src.indexJs)
        .pipe(include())
        .pipe(sourcemaps.init())
        .pipe(terser())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.js))
});

gulp.task('style:build', function () {
   gulp.src(path.src.scss)
       .pipe(sourcemaps.init())
       .pipe(sass().on('error', sass.logError))
       .pipe(prefixer())
       .pipe(cssmin())
       .pipe(sourcemaps.write());
   return gulp.src(path.src.css)
          .pipe(gulp.dest(path.build.css))

});

gulp.task('img:build', function () {
   return gulp.src(path.src.img)
        .pipe(imagemin([
        imagemin.jpegtran({progressive: true}),
        imagemin.optipng({optimizationLevel: 10})
        ]))
        .pipe(gulp.dest(path.build.img))
});

gulp.task('moveOtherFiles:build', function () {
    return gulp.src([path.src.indexHtml, path.src.libs, path.src.video], {base:'./src'}).pipe(gulp.dest(path.build.root))
});

gulp.task('build', [
    'js:build',
    'style:build',
    'img:build',
    'moveOtherFiles:build'
]);

