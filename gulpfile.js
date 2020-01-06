/**
 * Gulp Config
 * =====================
 * Automation task
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptkdev.it)
 *
 * @license: This code and contributions have 'MIT License'
 *
 */
const gulp = require("gulp");
const gulp_concat = require("gulp-concat");
const gulp_sass = require("gulp-sass");
const gulp_minifycss = require("gulp-clean-css");
const gulp_minifyjs = require("gulp-terser");
const gulp_rename = require("gulp-rename");

gulp.task("build-css", function() {
	return gulp.src([`./node_modules/bulma/css/bulma.min.css`, `./client/css/main.scss`])
		.pipe(gulp_concat({path: "./full.min.tmp"}))
		.pipe(gulp_sass())
		.pipe(gulp_minifycss())
		.pipe(gulp_rename("full.min.css"))
		.pipe(gulp.dest(`./build/css/`));
});

gulp.task("build-js-popup", function() {
	let files = [`./client/js/dom.js`, `./client/js/main.js`, `./client/js/events.js`, `./client/js/video.js`];

	return gulp.src(files)
		.pipe(gulp_concat({path: "popup.min.tmp"}))
		.pipe(gulp_minifyjs())
		.pipe(gulp_rename("popup.min.js"))
		.pipe(gulp.dest(`./build/js/`));
});

gulp.task("build-js-options", function() {
	let files = [`./client/js/options.js`];

	return gulp.src(files)
		.pipe(gulp_concat({path: "options.min.tmp"}))
		.pipe(gulp_minifyjs())
		.pipe(gulp_rename("options.min.js"))
		.pipe(gulp.dest(`./build/js/`));
});

gulp.task("build-html", function() {
	let files = [`./client/html/**/*`];

	return gulp.src(files)
		.pipe(gulp.dest(`./build/`));
});

gulp.task("build-images", function() {
	let files = [`./client/images/**/*`];

	return gulp.src(files)
		.pipe(gulp.dest(`./build/images/`));
});

gulp.task("build-translations", function() {
	let files = [`./translations/**/*`];

	return gulp.src(files)
		.pipe(gulp.dest(`./build/_locales/`));
});

gulp.task("build-manifest", function() {
	let files = [`./configs/manifest.json`];

	return gulp.src(files)
		.pipe(gulp.dest(`./build/`));
});

gulp.task("build-watch", (done) => {
	gulp.watch([`./client/css/**/*.scss`]).on("change", gulp.parallel("build-css"));
	gulp.watch([`./client/js/**/*.js`]).on("change", gulp.parallel("build-js-popup", "build-js-options"));
	gulp.watch([`./client/images/**/*`]).on("change", gulp.parallel("build-images"));
	gulp.watch([`./translations/**/*`]).on("change", gulp.parallel("build-translations"));
	gulp.watch([`./configs/**/*`]).on("change", gulp.parallel("build-manifest"));

	done();
});

gulp.task("build", gulp.series("build-css", "build-js-popup", "build-js-options", "build-html", "build-images", "build-translations", "build-manifest"));

gulp.task("dev", gulp.parallel("build-watch"));