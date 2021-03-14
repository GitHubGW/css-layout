import gulp from "gulp";
import del from "del";
import sass from "gulp-sass";
import minify from "gulp-csso";
import autoprefixer from "gulp-autoprefixer";

sass.compiler = require("node-sass");

const routes = {
  // 현재 이 gulp파일은 기본적으로 아래 src속성에 있는 해당 경로의 디렉토리 파일을 관찰하고 있다.
  // 그래서 해당 파일에서 짜여진 코드는 일반 CSS로 컴파일 되는 것이다. (해당 파일이 프로세스(진행. 과정)의 첫 단계인 것이다.)
  css: {
    watch: "src/scss/*",
    src: "src/scss/styles.scss",
    dest: "dist/css",
  },
};

const styles = () =>
  gulp
    .src(routes.css.src)
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        flexbox: true,
        grid: "autoplace",
      })
    )
    .pipe(minify())
    .pipe(gulp.dest(routes.css.dest));

const watch = () => {
  gulp.watch(routes.css.watch, styles);
};

const clean = () => del(["dist/"]);

const prepare = gulp.series([clean]);

const assets = gulp.series([styles]);

const live = gulp.parallel([watch]);

export const dev = gulp.series([prepare, assets, live]);
