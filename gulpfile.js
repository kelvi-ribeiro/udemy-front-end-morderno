var gulp = require('gulp')
,   sass = require('gulp-sass')
,   include = require('gulp-file-include')
,   autoprefixer = require('gulp-autoprefixer')
,   uncss = require('gulp-uncss')
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
    .pipe(autoprefixer())
    .pipe(gulp.dest('./dist/css/'));
})

gulp.task('html',function(){
    return gulp.src('./src/**/*.html')
    .pipe(include())
    .pipe(gulp.dest('./dist/'))
})

gulp.task('uncss',['html'],function(){
    return gulp.src('./dist/components/**/*.css')
    .pipe(uncss({
        html:['./dist/*.html']
    }))
    .pipe(gulp.dest('./dist/components'))
})

gulp.task('server',['uncss'],function(){
    brwoserSync.init({
        server:{
            baseDir:'dist'
        }
    })
    gulp.watch('./dist/**/**').on('change',brwoserSync.reload)
    gulp.watch('./src/sass/**/*.scss',['sass'])
    gulp.watch('./src/**/*.html',['html'])
    
})
