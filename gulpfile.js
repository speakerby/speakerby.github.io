const { series, src, dest } = require('gulp');
const del = require('del');
const autoprefixer = require('gulp-autoprefixer');
const htmlmin = require('gulp-htmlmin');
const sass = require('gulp-sass');
const csso = require('gulp-csso');
const terser = require('gulp-terser');

const AUTOPREFIXER_BROWSERS = [
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];

function clean() {
  return del(['docs']);
} 

function styles() {
  return src('./src/scss/**/*.scss')
    .pipe(sass({
      outputStyle: 'nested',
      precision: 10,
      includePaths: ['.'],
      onError: console.error.bind(console, 'Sass error:')
    }))
    .pipe(autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
    .pipe(csso())
    .pipe(dest('./docs/css'));
} 

function scripts() {
  return src('./src/js/**/*.js')
  .pipe(terser())
  .pipe(dest('./docs/js'));
} 

function pages() {
  return src(['./src/**/*.html'])
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(dest('./docs'));
} 

function images() {
  return src('./src/tinified-images/**/*')
    .pipe(dest('./docs/images'));
}

function assets() {
  return src(['./src/favicon.ico', './src/site.webmanifest'])
    .pipe(dest('./docs'));
}

exports.default = series(clean, styles, scripts, pages, images, assets);
