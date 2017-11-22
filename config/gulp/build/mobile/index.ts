var gulp = require('gulp');
var ts = require('gulp-typescript');
var merge = require('merge2');  // Requires separate installation

gulp.task('mobile:build', function () {
    return gulp.src('src/mobile-new/**/*.ts')
        .pipe(ts({
            noImplicitAny: true,
            outFile: 'main.js',
            module: "amd",
            target: "es5",
            experimentalDecorators: true
        }))
        .pipe(gulp.dest('dist/mobile'));
});


 
gulp.task('scripts', function() {
    var tsResult = gulp.src('src/mobile-new/**/*.ts')
        .pipe(ts({
            declaration: true
        }));
    return merge([
        tsResult.dts.pipe(gulp.dest('dist/mobile/definitions')),
        tsResult.js.pipe(gulp.dest('dist/mobile/js'))
    ]);
});