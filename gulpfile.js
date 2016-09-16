var jshint	= require('gulp-jshint'),
	stylish	= require('jshint-stylish'),
	gulp 	= require('gulp');

gulp.task("clean", function() {
	console.log("Clean");
});

gulp.task("before", ["clean"] ,function() {
	console.log("Before");
});

gulp.task('lint', function() {
  return gulp.src('./Lynda.com/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

gulp.task("build", function() {
	console.log("Build");
	gulp.src("Lynda.com/**/*.*")
		.pipe(gulp.dest("build/lyndacom"));
});

gulp.task("after", function() {
	console.log("After");
});

gulp.task("default", ["before", "build", "after"], function() {
	console.log("Default");
});

