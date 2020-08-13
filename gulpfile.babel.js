import gulp from "gulp";
import gPug from "gulp-pug";
import sass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";
import minify from "gulp-csso";
import bro from "gulp-bro";
import babelify from "babelify";
import image from "gulp-image";
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
  js: {
    src: "src/js/*.js",
    dist: "dist/js",
    watch: "src/**/*.js",
  },
  img: {
    src: "src/img/*",
    dist: "dist/img/",
  },
};

const webserver = () =>
  gulp.src(["dist"]).pipe(ws({ livereload: true, open: true }));

const watch = () => {
  gulp.watch(routes.style.watch, style);
  gulp.watch(routes.pug.watch, pug);
  gulp.watch(routes.js.watch, js);
  gulp.watch(routes.img.src, img);
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

const js = () =>
  gulp
    .src(routes.js.src)
    .pipe(
      bro({
        transform: [
          babelify.configure({ presets: ["@babel/preset-env"] }),
          ["uglifyify", { global: true }],
        ],
      })
    )
    .pipe(gulp.dest(routes.js.dist));

const img = () =>
  gulp.src(routes.img.src).pipe(image()).pipe(gulp.dest(routes.img.dist));

const prepare = gulp.series([clean]);

const assets = gulp.series([pug, style, js, img]);

const live = gulp.parallel([webserver, watch]);

export const build = gulp.series([prepare, assets]);

export const dev = gulp.series([build, live]);

export const deploy = gulp.series([build, gh, clean]);
