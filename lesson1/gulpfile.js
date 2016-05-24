// Include gulp
var gulp   = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass   = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var clean  = require('gulp-clean');
var htmlmin = require('gulp-htmlmin');
var cleanCSS = require('gulp-clean-css');

// var exec   = require('child_process').exec;
   
// gulp.task('start-mongo', runCommand('mongod --dbpath ./data/'));
// gulp.task('stop-mongo', runCommand('mongo --eval "use admin; db.shutdownServer();"'));
// gulp.task('start-app', runCommand('node app.js'));

// Lint Task
gulp.task('lint', function() {
    return gulp.src('src/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('clean-dist', function(){
   return gulp.src('dist', {read: false})
        .pipe(clean()); 
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('src/style/scss/*.scss')
        .pipe(sass())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist/style/css'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('src/**/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('copy-index-html', function() {
    return gulp.src('src/index.html')
    // Perform minification tasks, etc here
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'));
});

gulp.task('copy-html-folder', function(){
    return gulp.src('src/templates/**/*')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist/templates'));
});

gulp.task('copy-style-folder', function(){
    return gulp.src('src/style/**/*')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist/style'));
});



// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('src/**/*.js', ['lint', 'scripts']);
    gulp.watch('src/style/scss/*.scss', ['sass']);
    gulp.watch('src/index.html', ['copy-index-html']);
    gulp.watch('src/templates/**/*', ['copy-html-folder']);
    gulp.watch('src/style/**/*', ['copy-style-folder']);
});

// Default Task
gulp.task('default', ['lint', 'sass', 'scripts', 'watch', 'copy-index-html', 'copy-html-folder', 'copy-style-folder']);

function runCommand(command) {
  return function (cb) {
    exec(command, function (err, stdout, stderr) {
      console.log(stdout);
      console.log(stderr);
      cb(err);
    });
  }
};