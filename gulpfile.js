var gulp = require('gulp')
,   sass = require('gulp-sass')
,   include = require('gulp-file-include')
,   brwoserSync = require('browser-sync')

gulp.task('sass',function(){
    gulp.src('./src/sass/**/*.scss')
    .pipe(sass())

    .pipe(gulp.dest('./src/css/'));
})

gulp.task('html',function(){
    gulp.src('./src/index.html')
    .pipe(include())
    .pipe(gulp.dest('./dist/'))
})

gulp.task('server',function(){
    brwoserSync.init({
        server:{
            baseDir:'src'
        }
    })
    gulp.watch('./src/**/**').on('change',brwoserSync.reload)
    gulp.watch('./src/sass/**/*.scss',['sass'])
    
})
