var gulp = require('gulp');
var sftp = require('gulp-sftp');
var ssh = require('gulp-ssh');

gulp.task('member',['member.delete'], function () {
    return gulp.src('src/inc/member/*')
        .pipe(sftp({
            host: '121.42.158.224',
            port: '22',
            user: 'root',
            pass: 'Imeepos1989.',
            remotePath: '/data/wwwroot/meepo.com.cn/addons/imeepos_runner/core/model/member'
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
gulp.task('member.delete', () => {
    console.log('删除服务器上现有文件...');
    return gulpSSH.shell([`rm -rf /data/wwwroot/meepo.com.cn/addons/imeepos_runner/core/model/member`])
        .pipe(gulp.dest('config/logs'));
});



import "./setting";
import "./orders";
import "./shops";
import "./app";
import "./imeepos";
import "./goods";
import "./cars";
import "./cards";
import "./topics";
import "./tasks";
import "./login";
import "./tixian";
import "./runner";
import "./buy";
import "./paylog";

import "./carfiles";
import "./money";
import "./cloud";
import "./actives";
import "./lessons";
import "./skills";
import "./group";
import "./message";


import "./cloud-state";
import "./meepo/welcome";

