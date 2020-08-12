import gulp from "gulp";
import gPug from "gulp-pug";
import sass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";
import minify from "gulp-csso";
import ws from "gulp-webserver";
import ghPages from "gulp-gh-pages";
import del from "del";

sass.compiler = require("node-sass");

const clean = () => del(["dist", ".publish"]);

const routes = {
  style: {
    src: "src/scss/style.scss",
    dist: "dist/css",
    watch: "src/scss/*.scss",
  },
  pug: {
    src: "src/*.pug",
    dist: "dist",
    watch: "src/**/*.pug",
  },
};

const webserver = () =>
  gulp.src(["dist"]).pipe(ws({ livereload: true, open: true }));

const watch = () => {
  gulp.watch(routes.style.watch, style);
  gulp.watch(routes.pug.watch, pug);
};

const gh = () => gulp.src("dist/**/*").pipe(ghPages());

const pug = () =>
  gulp.src(routes.pug.src).pipe(gPug()).pipe(gulp.dest(routes.pug.dist));

const style = () =>
  gulp
    .src(routes.style.src)
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        flexbox: true,
        grid: "autoplace",
      })
    )
    .pipe(minify())
    .pipe(gulp.dest(routes.style.dist));

const prepare = gulp.series([clean]);

const assets = gulp.series([pug, style]);

const live = gulp.parallel([webserver, watch]);

export const build = gulp.series([prepare, assets]);

export const dev = gulp.series([build, live]);

export const deploy = gulp.series([build, gh, clean]);
