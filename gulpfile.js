require('./gulp/tasks/watch');
require('./gulp/tasks/styles.js'); //.js is optional while importing a js file


/*var gulp = require('gulp') ,
watch = require('gulp-watch'),
/* All the following packages are moved to the new file called styles.js to have the code organised

postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),

//browserSync = require('browser-sync').create(); // Just require only the create method from the package.
*/
/* Following dummy tasks are commented as they no longer in use

gulp.task('default',function() {
console.log ("WoW - this is your first gulp task!");
}
);

gulp.task("html",function() {
	console.log( 'There are some changes being done in your html file');
});
*/


//styles task is moved to the seperate file called styles.js
