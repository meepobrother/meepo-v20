var gulp = require('gulp');
var sftp = require('gulp-sftp');
var ssh = require('gulp-ssh');

gulp.task('cloud-state',['cloud-state.delete'], function () {
    return gulp.src('src/inc/cloud-state/*')
        .pipe(sftp({
            host: '121.42.158.224',
            port: '22',
            user: 'root',
            pass: 'Imeepos1989.',
            remotePath: '/data/wwwroot/meepo.com.cn/addons/imeepos_runner/core/model/cloud-state'
        }));
});

var gulpSSH = new ssh({
    ignoreErrors: false,
    sshConfig: {
        host: '121.42.158.224',
        port: 22,
        username: 'root',
        password: 'Imeepos1989.',
    }
});
gulp.task('cloud-state.delete', () => {
    console.log('删除服务器上现有文件...');
    return gulpSSH.shell([`rm -rf /data/wwwroot/meepo.com.cn/addons/imeepos_runner/core/model/cloud-state`])
        .pipe(gulp.dest('config/logs'));
});

