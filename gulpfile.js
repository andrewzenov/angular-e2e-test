var gulp = require('gulp');
var protractor = require('gulp-protractor').protractor;

gulp.task('default', function () {

    gulp.src(['./test/*.js'])
        .pipe(protractor({
            configFile: './conf/conf.js',
            args: ['--baseUrl', 'http://127.0.0.1:8000']
        }))
        .on('error', function (e) {
            throw e;
        });
});

//develop line