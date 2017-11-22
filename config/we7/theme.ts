

import * as gulp from 'gulp';
var sass = require('gulp-sass');

var postcss = require('gulp-postcss');

var autoprefixer = require('autoprefixer');


gulp.task('theme', function () {
    return gulp.src('./src/admin/app/themes/meepoui.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoprefixer({ browsers: ['last 2 versions'] })]))
        .pipe(gulp.dest('./src/inc/imeepos_runner/template/mobile/design/'));
});
