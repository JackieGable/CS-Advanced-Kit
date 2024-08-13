import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import cleanCSS from 'gulp-clean-css';
import autoprefixer from 'gulp-autoprefixer';
import sourcemaps from 'gulp-sourcemaps';

const sass = gulpSass(dartSass);

const paths = {
  scss: {
    src: 'src/assets/sass/**/*.scss',
    dest: 'public/assets/css'
  }
};

function styles() {
  return gulp.src(paths.scss.src)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.scss.dest));
}

function watchFiles() {
  gulp.watch(paths.scss.src, styles);
}

const build = gulp.series(styles);
const watch = gulp.parallel(watchFiles);

export { styles, watch, build, default as default };
