'use strict'

const { series, parallel, src, dest, watch } = require('gulp');

const sass = require('gulp-sass');
const cssmin = require('gulp-cssmin');

const sourcemaps = require('gulp-sourcemaps');
const wrapJS = require('gulp-wrap-js');

const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');

const concat = require('gulp-concat');
const rename = require('gulp-rename');
const minify = require('minify');


const path = {
    scss: 'src/scss/app.scss',
    css:  'build/css',
     img: 'src/img/**/*',
    imgD: 'build/img',
      js: 'src/js/**/*',
     jsc: 'build/js'
}

const opciones = {
    html: {
        removeAttributeQuotes: false,
    },   
    css: {
        compatibility: '*',
    },
    js: {
        ecma: 6,
    },
    img: {
        maxSize: 4096,
    }
}


function hola( done )
{
    console.log("Hola desde gulpfile");
    done();
}

function minScss(  )
{
    return src(path.scss)
    .pipe( sass({
        outputStyle: 'expanded' //comprese -> mincss
    }) )
    .pipe( dest(path.css) )
    .pipe( cssmin() )
    .pipe( rename({suffix: '.min'}) )
    .pipe( dest(path.css) )
}

function minJs( )
{
    return src( path.js )
    .pipe( concat('app.js') )
    .pipe( dest( path.jsc ) )

    
}

function minHtml( done )
{
    console.log("Minificando HTML");
    done();
}

function img()
{
    return src( path.img )
    .pipe( imagemin() )
    .pipe( dest( path.imgD ) )
    .pipe( webp() )
    .pipe( dest( path.imgD ) )
}

function verArchivos()
{
    watch('src/scss/**/*.scss', minScss);
    watch(path.js, minJs);
}

exports.hola = hola;
exports.minScss = minScss;
exports.minJs = minJs;
exports.minHtml = minHtml;
exports.img = img;
exports.verArchivos = verArchivos;
exports.default = parallel(hola, minScss, minJs, img, minHtml, verArchivos);