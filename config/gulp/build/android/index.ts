import * as gulp from 'gulp';
// Create a cordova project.
const create = require('gulp-cordova-create');

const android = require('gulp-cordova-build-android');
// 跨域
const access = require('gulp-cordova-access');
// 版本
const version = require('gulp-cordova-version');
// 描述
const description = require('gulp-cordova-description');
// 作者
const author = require('gulp-cordova-author');
// 图标
const icon = require('gulp-cordova-icon');
// xml
const xml = require('gulp-cordova-xml');

// Set a preference of your cordova project
const pref = require('gulp-cordova-preference');

// 插件
// Add a plugin to your cordova project.
const plugin = require('gulp-cordova-plugin');
// Removes a plugin from the cordova project.
const rmplugin = require('gulp-cordova-plugin-remove');

gulp.task('admin:android:build', () => {
    return gulp.src('dist/admin')
        .pipe(create())
        // 跨域
        .pipe(access('*', true))
        .pipe(access('http://*.meepo.com.cn/*'))
        .pipe(access('http://meepo.com.cn/*'))
        .pipe(access('tel:*', { 'launch-external': 'yes' }))
        // 版本号
        .pipe(version('2.3.1'))
        // 简介
        .pipe(description('小明跑腿后台管理端-安卓版'))
        // 作者
        .pipe(author('imeepos', '1037483576@qq.com'))
        // 图标
        // .pipe(icon('res/my-icon.png'))
        // xml
        .pipe(xml('<access origin="http://www.google.com" />'))
        .pipe(xml('<access origin="http://www.github.com" />'))
        .pipe(pref('AndroidLaunchMode', 'singleTop'))
        .pipe(pref('ShowTitle', true))
        // 插件
        .pipe(plugin('cordova-plugin-whitelist'))
        .pipe(plugin('org.apache.cordova.camera'))
        // 打包
        .pipe(android({ release: true }))
        // 目录
        .pipe(gulp.dest('apk'));
});

