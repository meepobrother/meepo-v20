import * as gulp from 'gulp';
const symdest = require('gulp-symdest');
const electron = require('gulp-atom-electron');
const verson = '1.0.0';
gulp.task('admin:linux:build', (done: any) => {
    let src = [
        './dist/admin/*'
    ];
    return gulp.src(src)
        .pipe(electron({ version: verson, platform: 'linux' }))
        .pipe(symdest('desktop/linux'));
});