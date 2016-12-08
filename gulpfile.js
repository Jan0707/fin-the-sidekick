'use strict';

const gulp      = require('gulp');
const pug       = require('gulp-pug');
const notify    = require('gulp-notify');
const ts        = require('gulp-typescript');
// const server    = require('gulp-develop-server');

const tsPath    = ['./src/**/*.ts'];
const pugPath   = ['./src/index.pug', './src/app/**/*.pug']
const jsPath    = './dist/server/index.js';

const distPath  = './dist';

gulp.task('build:dist', ['build:pug'], () => {
    const tsProject = ts.createProject('./src/tsconfig.json');
    const tsResult = gulp.src(tsPath)
        .pipe(tsProject());
 
    return tsResult.js
            // .pipe(notify("Compilated JS files"))
            .pipe(gulp.dest(distPath))
            .pipe(notify({
                message: "Generated file: <%= file.relative %> @ <%= options.date %>",
                templateOptions: {
                    date: new Date()
                }
            }))
});

gulp.task('build:pug', (done) => {
    gulp.src(pugPath)
    .pipe(pug())
    .pipe(gulp.dest(distPath))
    .on('end', done);
});

gulp.task('watch', () => {
    gulp.watch(tsPath, ['build:dist']);
});

/*
gulp.task('server:start', () => {
    server.listen({ path: jsPath });
});

gulp.task('server:restart', () => {
    server.restart((error) => {
        if(error) {
            console.error(error);
        };
    });
});

gulp.task('server:watch', ['server:start'], () => {
    gulp.watch(tsPath, ['build:dist']);
    gulp.watch(jsPath, ['server:restart'] );
});
*/
