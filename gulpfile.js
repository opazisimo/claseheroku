var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');
var pngcrush = require('pngcrush');
var $ = require('jquery');

gulp.task('script', function(cb){
	gulp.src('src/js/*.js')

	.pipe(concat('script.min.js'))
	.pipe(uglify())

	.pipe(gulp.dest('dist/js'));
});

gulp.task('style', function() {
	gulp.src(['src/sass/main.scss', 'src/css/*.css'])

	.pipe(sass().on('error', sass.logError))
	.pipe(minifyCSS())
	.pipe(concat('style.min.css'))
	.pipe(gulp.dest('dist/css/'));

});

gulp.task('images', function() {
       //Tarea para comprimir imagenes
       gulp.src('src/img/*.{png,jpg,jpeg,gif,svg}')
       .pipe(imagemin({
               progressive: true,
               svgoPlugins: [{removeViewBox: false}],
               use: [pngcrush()]
       }))

       .pipe(gulp.dest('./dist/images/'))
       .pipe(notify("La compresión de imágenes ha terminado!"));
   });


gulp.task('default', ['images', 'style', 'script']);