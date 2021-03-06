const { src, dest, series, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const csso = require("gulp-csso");
const nunjucks = require("gulp-nunjucks");
const htmlmin = require("gulp-htmlmin");
const del = require("del");
const concat = require("gulp-concat");
const autoprefixer = require("gulp-autoprefixer");
const sync = require("browser-sync").create();

function html() {
  return src("src/**.html")
    .pipe(nunjucks.compile())
    .pipe(
      htmlmin({
        collapseWhitespace: true,
      })
    )
    .pipe(dest("dist"));
}

function scss() {
  return src(["src/**/*.scss", "src/**.css"])
    .pipe(sass())
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"],
      })
    )
    .pipe(csso())
    .pipe(concat("index.css"))
    .pipe(dest("dist"));
}

function js() {
  return src("src/js/**.js")
    .pipe(concat("script.js"))
    .pipe(dest("dist"));
}

function libs() {
  return src("src/libs/**/*")
    .pipe(dest("dist/libs"))
}

function netlify() {
  return src("src/_redirects")
    .pipe(dest("dist"))
}

function fonts() {
  return src("src/fonts/**.ttf")
    .pipe(dest("dist/fonts"));
}

function images() {
  return src("src/images/**")
    .pipe(dest("dist/img"));
}

function favicon() {
  return src("src/favicon/**")
    .pipe(dest("dist"));
}

function clear() {
  return del("dist");
}

function serve() {
  sync.init({
    server: "./dist",
  });

  watch("src/**/*.html", series(html)).on("change", sync.reload);
  watch("src/**/*.scss", series(scss)).on("change", sync.reload);
  watch("src/js/**.js", series(js)).on("change", sync.reload);
  watch("src/images/**", series(images)).on("change", sync.reload);
}

exports.build = series(clear, scss, html, fonts, js, images, favicon, libs, netlify);
exports.serve = series(clear, scss, html, fonts, js, images, favicon, libs, serve);
