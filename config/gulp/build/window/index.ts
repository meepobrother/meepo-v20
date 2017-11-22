import * as gulp from 'gulp';
const symdest = require('gulp-symdest');
const electron = require('gulp-atom-electron');

const packager = require('electron-packager');
const electronInstaller = require('electron-winstaller');

const verson = '1.0.0';
gulp.task('admin:window:build', (done: any) => {
    packager({
        dir: './dist/admin',
        name: "runner",
        platform: 'win32',
        arch: 'all',
        out: './desktop'
    }).then(res => {
        console.log(res);

        const resultPromise = electronInstaller.createWindowsInstaller({
            appDirectory: './desktop/runner-win32-ia32/',
            outputDirectory: './release/runner-win32-ia32',
            authors: 'imeepos',
            exe: 'runner.exe'
        });
        resultPromise.then(() => console.log("It worked!"), (e) => console.log(`No dice: ${e.message}`));

        const resultPromise2 = electronInstaller.createWindowsInstaller({
            appDirectory: './desktop/runner-win32-x64/',
            outputDirectory: './release/runner-win32-x64',
            authors: 'imeepos',
            exe: 'runner.exe'
        });
        resultPromise2.then(() => console.log("It worked!"), (e) => console.log(`No dice: ${e.message}`));
    });
});
