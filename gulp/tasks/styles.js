var gulp = require('gulp') ,
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import');

//Following is the async function that should have return
gulp.task('styles',function() {
	//console.log( 'There are some changes being done in css files');
	//Note : cssImport package needs to be added at the front of the array list in postcss function
	return gulp.src('./app/assets/styles/styles.css')
		.pipe(postcss([cssImport,cssvars,nested,autoprefixer]))
    .on('error',function(errorInfo) {
      console.log(errorInfo.toString());
      this.emit('end');
    })
		.pipe(gulp.dest('./app/temp/styles'));
});
