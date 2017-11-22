import * as gulp from 'gulp';
const symdest = require('gulp-symdest');
const electron = require('gulp-atom-electron');

const packager = require('electron-packager');

const verson = '1.0.0';
gulp.task('admin:mac:build', (done: any) => {
    packager({
        dir: './dist/admin',
        name: "runner",
        platform: 'darwin',
        arch: 'all',
        out: './desktop'
    }).then(res => {
        console.log(res);
    });
});
