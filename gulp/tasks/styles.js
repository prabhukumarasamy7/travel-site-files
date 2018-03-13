var gulp = require('gulp') ,
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins');

//Following is the async function that should have return
gulp.task('styles',function() {
	//console.log( 'There are some changes being done in css files');
	//Note : cssImport package needs to be added at the front of the array list in postcss function
	return gulp.src('./app/assets/styles/styles.css')
		.pipe(postcss([cssImport,mixins,cssvars,nested,autoprefixer])) // Note that the sequence of postcss packages are more important
    .on('error',function(errorInfo) {  // ' Gulp error handling'
      console.log(errorInfo.toString());
      this.emit('end'); // This will end the current task  rather than breaking the gulp task and allows the control to process to continue after the parent task
    })
		.pipe(gulp.dest('./app/temp/styles'));
});
