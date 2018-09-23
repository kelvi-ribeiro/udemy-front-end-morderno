var gulp = require('gulp')
,   sass = require('gulp-sass')
,   include = require('gulp-file-include')
,   brwoserSync = require('browser-sync')
,   clean = require('gulp-clean')

gulp.task('clean',function(){
    return gulp.src('dist')
    .pipe(clean());
})

gulp.task('copy', ['clean'],function(){
    gulp.src(
            ['src/components/**/*',
            'src/css/**/*',
            'src/javascript/**/*',
            'src/imagens/**/*'],
            {
        "base":"src"
    })
    .pipe(gulp.dest('dist'))
})

gulp.task('sass',function(){
    gulp.src('./src/sass/**/*.scss')
    .pipe(sass())

    .pipe(gulp.dest('./src/css/'));
})

gulp.task('html',function(){
    return gulp.src('./src/index.html')
    .pipe(include())
    .pipe(gulp.dest('./dist/'))
})

gulp.task('server',['html'],function(){
    brwoserSync.init({
        server:{
            baseDir:'dist'
        }
    })
    gulp.watch('./src/**/**').on('change',brwoserSync.reload)
    gulp.watch('./src/sass/**/*.scss',['sass'])
    
})
