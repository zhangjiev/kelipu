const gulp = require("gulp");
const babel = require("gulp-babel");
const sass = require("gulp-sass");
// const watch = require("gulp-watch");

gulp.task("buildJS",()=>{
	gulp.src("./src/js/**/*.*")
		// .pipe(babel({
		// 	presets: ['@babel/env']
		// }))
		.pipe(gulp.dest("./js"));
});

gulp.task("buildCSS",()=>{
	gulp.src("./src/css/**/*.scss")
		.pipe( sass() )
		.pipe(gulp.dest("./css"));
});

gulp.task("watch", ()=>{
	gulp.watch("./src/**/*.js", ["buildJS"]);
	gulp.watch("./src/**/*.scss", ["buildCSS"]);
});

gulp.task("build",["buildJS","buildCSS"]);
