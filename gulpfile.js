// npm i
var gulp = require('gulp')
var less = require('gulp-less')
var LessAutoprefix = require('less-plugin-autoprefix')
var autoprefix = new LessAutoprefix( { browsers: ['last 2 versions'] } )

var ts = require('gulp-typescript')
var pug  = require('gulp-pug')
var riot =  require('gulp-riot')
var rename = require('gulp-rename')
//var path = require('path')
gulp.task('default', defaultTask)
function defaultTask(done) {
	gulp.start('css', 'html', 'comp', 'js')
	done()
	}

	//
gulp.task('watch', function(done) {
	gulp.start('css', 'html', 'comp', 'js')
	gulp.watch('./www/**/*.pug', ['comp', 'css', 'html', 'js'])
	done()
})
//

gulp.task('css', function () {
	return gulp.src('./www/assets/fr7/framework7.less')
		.pipe( less(
				{ plugins: [autoprefix] }
			))
		.pipe(gulp.dest('./www/assets/fr7/'))
	})

gulp.task('html', function() {  
	return gulp.src('./www/*.pug')
		.pipe( pug(
			{ pretty: true }
		)) // pipe to pug plugin
		.pipe(gulp.dest('./www/'))
	})

gulp.task('comp', function() {  
	return gulp.src('./www/comps/*.pug')
		.pipe(pug(
			{ pretty: true }
		)) // pipe to pug plugin
		.pipe( rename({ extname: '.tag'}))
		.pipe( riot())
		.pipe(gulp.dest('./www/comps/'))
	})

gulp.task('tag', function() {// lets you see a tag before compile
	return gulp.src('./www/comps/*.pug')
		.pipe( pug(
			{ pretty: true }
		)) // pipe to pug plugin
		.pipe(rename({ extname: '.tag'}))
		.pipe(gulp.dest('./www/comps/'))	
	})

gulp.task('js', function () {
	return gulp.src('./www/**/*.ts')
		.pipe( ts(
			{ }
		))
		.pipe(gulp.dest('./www/'))
	})