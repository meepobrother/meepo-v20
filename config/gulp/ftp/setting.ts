var gulp = require('gulp');
var sftp = require('gulp-sftp');
var ssh = require('gulp-ssh');

gulp.task('setting',['setting.delete'], function () {
    return gulp.src('src/inc/setting/*')
        .pipe(sftp({
            host: '121.40.132.12',
            port: '22',
            user: 'root',
            pass: 'Imeepos1989.',
            remotePath: '/data/wwwroot/default/addons/imeepos_runner/core/model/setting'
        }));
});

var gulpSSH = new ssh({
    ignoreErrors: false,
    sshConfig: {
        host: '121.40.132.12',
        port: 22,
        username: 'root',
        password: 'Imeepos1989.',
    }
});
gulp.task('setting.delete', () => {
    console.log('删除服务器上现有文件...');
    return gulpSSH.shell([`rm -rf /data/wwwroot/default/addons/imeepos_runner/core/model/setting`])
        .pipe(gulp.dest('config/logs'));
});

