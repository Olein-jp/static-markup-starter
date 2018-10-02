// Plugin
var gulp = require( 'gulp' ),
    sass = require( 'gulp-sass' ),
    sourcemaps = require( 'gulp-sourcemaps' ),
    browsersync = require( 'browser-sync'),
    autoprefixer = require( 'gulp-autoprefixer' ),
    imagemin = require( 'gulp-imagemin' ),
    mozjpeg = require( 'imagemin-mozjpeg' ),
    pngquant = require( 'imagemin-pngquant' ),
    notify = require( 'gulp-notify' ),
    uglify = require( 'gulp-uglify' ),
    rename = require( 'gulp-rename' ),
    plumber = require( 'gulp-plumber' ),
    cssmin = require( 'gulp-cssmin' );

// Sass
// Save Directory
gulp.task( 'sass', function() {
    gulp.src( './src/assets/sass/*.scss')
        .pipe(plumber({
            errorHandler: notify.onError("Error: <%= error.message %>")
        }))
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(sourcemaps.write({includeContent: false}))
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(autoprefixer({
            browsers: ['last 2 version', 'iOS >= 8.1', 'Android >= 4.4'],
            cascade: false
        }))
        .pipe(sourcemaps.write( './'))
        .pipe(gulp.dest( './src/assets/css/' ));
});
// Watch scss files
gulp.task( 'sass-watch', ['sass'], function() {
    var watcher = gulp.watch( './src/assets/sass/**/*.scss', ['sass']);
    watcher.on( 'change', function(event){

    });
});

// css autpprefixer
gulp.task( 'autoprefix', function() {
    return gulp.src([ './src/assets/css/**/*.css' ])
        .pipe(autoprefixer({
            browsers: ['last 2 version', 'iOS >= 8.1', 'Android >= 4.4'],
            cascade: false
        }))
        .pipe(gulp.dest( './src/assets/css'))
});

// imagemin
gulp.task( 'imagemin', function(){
    return gulp.src( './src/assets/images/**/*.{png,jpg,gif,svg,jpeg}' )
    .pipe( imagemin([
        pngquant({
            quality: '65-80',
            speed: 1,
            floyd: 0
        }),
        mozjpeg({
            quality: 85,
            progressive: true
        }),
        imagemin.svgo(),
        imagemin.optipng(),
        imagemin.gifsicle()
    ]))
    .pipe(gulp.dest('./dist/assets/images/'))
    .pipe(notify('🎉Image minify task finished🎉'));
});

// JS min
gulp.task( 'jsmin',function(){
    gulp.src( './src/assets/js/**/*.js' )
        .pipe(uglify())
        .pipe(rename({extname: '.min.js' }))
        .pipe(gulp.dest( './src/assets/js/'))
        .pipe(notify('🎉JavaScript minify task finished🎉'));
})

// CSS min
gulp.task('cssmin', function(){
    gulp.src('./src/assets/css/**/*.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest( './src/assets/css/'))
        .pipe(notify('🎉CSS minify task finished🎉'));
});

// Browser Sync
gulp.task('browser-sync', function() {
    browsersync({
        server: {
            baseDir: "./src",
            index: "index.html"
        }
    });
});

// Reload Browser
gulp.task( 'bs-reload', function() {
    browsersync.reload();
});

// copy library in node_modules to dist directory
gulp.task( 'copylib', function() {
    // gulp.src('node_modules/bootstrap/dist/*').pipe(gulp.dest( 'src/assets/lib/bootstrap/' ) );
} );

// copy sr to dist
gulp.task( 'copysrc', function(){
    gulp.src([
        'src/**/*.html',
        'src/assets/css/**',
        'src/assets/js/**',
        'src/assets/images/**'
    ], {
        base: 'src'
    })
        .pipe(gulp.dest('dist'))

    gulp.src('src/assets/lib/**/*', { base: 'src/assets/lib/' } )
        .pipe(gulp.dest('dist/assets/lib/'));
});

//
// Default task
//
gulp.task( 'default', ['browser-sync','sass-watch'], function() {
    gulp.watch("./src/*.html", ['bs-reload']);
    gulp.watch("./src/assets/css/*.css", ['bs-reload']);
    gulp.watch("./src/assets/js/*.js", ['bs-reload']);
});

//
// Task for deploy
//
gulp.task( 'deploy', ['copysrc', 'imagemin']);