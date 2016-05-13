// Generated on 2016-05-13 using generator-bookmarklet 1.2.0
'use strict';

var buffer = require('buffer');
var del = require('del');
var gulp = require('gulp');
var gulpConcat = require('gulp-concat');
var gulpEslint = require('gulp-eslint');
var gulpUglify = require('gulp-uglify');
var map = require('map-stream');

gulp.task('scripts', function () {
	var header = new Buffer('// Copy this to your URL bar:\njavascript:');

	gulp.src('app/{,*/}*.js')
		.pipe(gulpEslint())
		.pipe(gulpUglify())
		.pipe(gulpConcat('bookmarklet.js'))
		.pipe(map(function (file, cb) {
			file.contents = buffer.Buffer.concat([header, file.contents]);
			cb(null, file);
		}))
		.pipe(gulp.dest('dist'));
});

gulp.task('clean', del.bind(null, 'dist'));

gulp.task('default', ['clean', 'scripts']);

gulp.task('watch', function () {
	gulp.watch('app/{,*/}*.js', ['scripts']);
});
