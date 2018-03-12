var gulp = require('gulp') ,
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();


gulp.task('watch',function () {

 browserSync.init( {
notify: false,
	 //This browser-sync will initiate a loca server with the files in below directory

		 server:{
			 baseDir: "app"
		 }
	 }
 );

	watch('./app/index.html', function () {
		// Stopping the following dummy task and refreshes the webpage automatically using browserSync
		//gulp.start('html');
		//Following methor will refresh the html file in baseDir
		browserSync.reload();
	});

	watch('./app/assets/styles/**/*.css', function () {
		// gulp.start('styles'); // Commenting this styles as this is going to be the dependency task for cssInject
		// Adding the following line will refresh the webpage even when the css is also updated
//		browserSync.reload();
gulp.start('cssInject');
	});
});


//Following is the async function that should have return
//Any tasks stated in the [] is a pre-requisite or dependency tasks. dependencies[styles] will be execcuted followed by the main task(cssInject)

gulp.task('cssInject',['styles'],function() {
	// Get the comuted css file from temp and inject into the html file which is running in browserSync server instance.
console.log( 'New CSS content is being injected');

	return gulp.src('./app/temp/styles/styles.css').pipe(browserSync.stream());

});
