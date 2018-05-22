let gulp = require('gulp'),
	sass = require('gulp-ruby-sass'),
	pug = require('gulp-pug'),
	plumber = require('gulp-plumber'),
	uglify = require('gulp-uglify'),
	imagemin = require('gulp-imagemin'),
	pump = require('pump'),
	browserSync = require('browser-sync').create();

//Compile Sass Into css
gulp.task('sass', ()=>{
	sass('css/*.scss', {
		style: 'expanded'
	})
	.on('error', plumber)
	.pipe(gulp.dest('css/compiled'))
	.pipe(browserSync.stream());
});

//Compile Pug Into Html
gulp.task('pug', ()=>{
	gulp.src('index.pug')
	.pipe(plumber())
	.pipe(pug({
		pretty: true
	}))
	.pipe(gulp.dest(''))
	.pipe(browserSync.stream());
});

//Compress Images
// gulp.task('image', ()=>{
// 	gulp.src('imgs/*')
// 	.pipe(plumber())
// 	.pipe(imagemin())
// 	.pipe(gulp.dest('imgs'));
// });

//Compress Js files
// gulp.task('jsmin', (cb)=>{
// 	pump([
// 		gulp.src('js/*.js'),
// 		uglify(),
// 		gulp.dest('js')
// 	], cb);
// });

//Sync of changes in js files
gulp.task('js', ()=>{
	gulp.src('js/*.js')
	.pipe(gulp.dest('js'))
	.pipe(browserSync.stream());
});

//Watch Tasks 
gulp.task('watch' , ()=>{
	//Browser Auto reload
	browserSync.init({
		server: {
			baseDir: './'
		}
	})
	//Watch Sass
	gulp.watch('css/*.scss', ['sass']);

	//Watch Pug
	gulp.watch('*.pug', ['pug']);

	//Watch Imagemin
	//gulp.watch('imgs/*', ['image']);

	//Watch Js Files
	gulp.watch('js/*.js', ['js']);

});

//Default Task
gulp.task('default', ['watch']);