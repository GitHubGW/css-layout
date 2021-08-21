import gulp from "gulp";
import del from "del";
// import sass from "gulp-sass";
import minify from "gulp-csso";
import autoprefixer from "gulp-autoprefixer";

// sass.compiler = require("node-sass"): gulp-sass의 컴파일러를 node-sass로 설정한다는 의미이다.
// 현재 M1맥에서는 node-sass가 제대로 동작하기 않아서 아래와 같이 코드를 바꿔서 진행했다.
// 윈도우나 다른환경에서는 위에 gulp-sass를 impmort해주고 node-sass를 불러와서 똑같이 적용하면 된다.
// sass.compiler = require("node-sass");
var sass = require("gulp-sass")(require("sass"));

// 모든 경로들을 담은 routes객체를 생성하고 여기서 모든 경로들을 컨트롤 한다.
const routes = {
  css: {
    watch: "src/scss/*",
    src: "src/scss/styles.scss", // gulpfile은 gulp.src()함수를 통해 지정한 routes.src프로퍼티 안에 있는 값을 컴파일할 파일로 지정한 상태이다.
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
