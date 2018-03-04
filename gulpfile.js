var gulp = require('gulp') ,  
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested');

gulp.task('default',function() {
console.log ("WoW - this is your first gulp task!");
}
);

gulp.task("html",function() {
	console.log( 'There are some changes being done in your html file');
});



gulp.task('styles',function() {
	//console.log( 'There are some changes being done in css files');
	return gulp.src('./app/assets/styles/styles.css')
		.pipe(postcss([cssvars,nested,autoprefixer]))
		.pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch',function () {
	
	watch('./app/index.html', function () {
		gulp.start('html');
	});
	
	watch('./app/assets/styles/**/*.css', function () {
		gulp.start('styles');
	});
});