/* For Gulp */
const gulp = require('gulp')
const less = require('gulp-less')
const cleanCSS = require('gulp-clean-css')
const preventBreaking = require('gulp-plumber')
const rename = require('gulp-rename')
const concat = require('gulp-concat')

/* For Rollup */
const rollup = require('rollup')
const babel = require('rollup-plugin-babel')
const commonjs = require('rollup-plugin-commonjs')
const resolve = require('rollup-plugin-node-resolve')
const external = require('rollup-plugin-peer-deps-external')
const pkg = require('./package.json')

/* Dist names */
const CSS_DIST_NAME = 'styles'
const JS_ES6_DIST_NAME = pkg.module
const JS_COMMON_DIST_NAME = pkg.main

/**
 * Concatenate all .less files inside the "src" folder into a single "style.css"
 * file inside the "dist" folder.
 */
gulp.task('compile-less-files', function () {
  return gulp.src('src/**/*.less')
    .pipe(preventBreaking())
    .pipe(less())
    .pipe(concat(`${CSS_DIST_NAME}.css`))
    .pipe(gulp.dest('dist'))
})

/**
 * Minify the "dist/style.css" file into a new "dist/style.min.css" file.
 */
gulp.task('minify-dist-css', function () {
  return gulp.src(`dist/${CSS_DIST_NAME}.css`)
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(rename(`${CSS_DIST_NAME}.min.css`))
    .pipe(gulp.dest('dist'))
})

/**
 * Make the bundle of the components and create 2 versions, commonjs and es6 module.
 */
gulp.task('rollup', async function () {
  // Init rollup
  const bundle = await rollup.rollup({
    input: './src/index.js',
    plugins: [
      external(),
      babel({
        "presets": [
          ["@babel/preset-env", {
            "modules": false
          }],
          "@babel/preset-react"
        ],
        exclude: 'node_modules/**',
        plugins: [ '@babel/plugin-external-helpers', '@babel/plugin-proposal-class-properties' ],
        externalHelpers: true
      }),
      resolve(),
      commonjs()
    ]
  })

  // CommonJS
  await bundle.write({
    file: JS_COMMON_DIST_NAME,
    format: 'cjs',
    exports: 'named',
    sourcemap: true
  })

  // ES6 Module
  await bundle.write({
    file: JS_ES6_DIST_NAME,
    format: 'es',
    exports: 'named',
    sourcemap: true
  })
})

/**
 * BUILD
 *
 * Make the component bundle, process the style files in .less, and create
 * a minified version of the rendered style file.
 */
gulp.task('build', ['rollup', 'compile-less-files', 'minify-dist-css'])

/**
 * DEV MODE
 *
 * Make the components bundle, process the style files and
 * listen for changes to perform a new build.
 */
const filestoWatch = ['src/**/*.js', 'src/**/*.less']
const tasksToRunOnChanges = ['rollup', 'compile-less-files']

gulp.task('watch', tasksToRunOnChanges, function () {
  gulp.watch(filestoWatch, tasksToRunOnChanges)
})

// Only watch less files
gulp.task('watch-less-files', [ 'compile-less-files' ], function () {
  gulp.watch('src/**/*.less', [ 'compile-less-files' ])
})

