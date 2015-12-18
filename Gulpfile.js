var gulp = require('gulp');
var mocha = require('gulp-mocha');

gulp.task('default',['test'])

gulp.task('test',function(){
  return gulp.src(['./index.spec.js'], {read: false})
    .pipe(mocha());
})