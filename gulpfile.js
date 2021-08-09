var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
gulp.task('default', function() {
    nodemon({
        script: 'app.js',
        ignore: ['node_modules', 'bower_components'],
        ext: 'js'
    }).on('restart', function() {
        console.log('restart');
        //setTimeout(reload, 1000);
    });
});