var gulp = require('gulp');
var sftp = require('gulp-sftp');
var ssh = require('gulp-ssh');

gulp.task('lessons',['lessons.delete'], function () {
    return gulp.src('src/inc/lessons/*')
        .pipe(sftp({
            host: '121.42.158.224',
            port: '22',
            user: 'root',
            pass: 'Imeepos1989.',
            remotePath: '/data/wwwroot/meepo.com.cn/addons/imeepos_runner/core/model/lessons'
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
gulp.task('lessons.delete', () => {
    console.log('删除服务器上现有文件...');
    return gulpSSH.shell([`rm -rf /data/wwwroot/meepo.com.cn/addons/imeepos_runner/core/model/lessons`])
        .pipe(gulp.dest('config/logs'));
});

