const gulp = require("gulp");
const path = require("path");
const babel = require("gulp-babel");
gulp.task("js", function () {
    return gulp.src(path.join(__dirname, "/src/*.js"))
        .pipe(babel({
            presets: ["env"],
            plugins:["transform-runtime"]
        }))
        .pipe(gulp.dest(path.join(__dirname, "/build")));
});

gulp.task("default",["js"]);
