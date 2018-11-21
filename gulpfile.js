// For Gulp
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
 * Concatenar todos os arquivos .less dentro da pasta "src" em um único
 * arquivo "style.css" dentro da pasta "dist".
 */
gulp.task('compile-less-files', function () {
  return gulp.src('src/**/*.less')
    .pipe(preventBreaking())
    .pipe(less())
    .pipe(concat(`${CSS_DIST_NAME}.css`))
    .pipe(gulp.dest('dist'))
})

/**
 * Minificar o arquivo "style.css" em um novo arquivo "style.min.css".
 */
gulp.task('minify-dist-css', function () {
  return gulp.src(`dist/${CSS_DIST_NAME}.css`)
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(rename(`${CSS_DIST_NAME}.min.css`))
    .pipe(gulp.dest('dist'))
})

/**
 * Fazer o "bundle" dos componentes em React e criar 2 versões, commonjs e es6 module.
 */
gulp.task('rollup', async function () {
  // Iniciar o rollup
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
        plugins: [ '@babel/plugin-external-helpers' ],
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
 * Fazer o bundle dos componentes, processar os arquivos de estilo em .less e criar
 * uma versão minificada do arquivo de estilo processado.
 */
gulp.task('build', ['rollup', 'compile-less-files', 'minify-dist-css'])

/**
 * DEV MODE
 *
 * Fazer o bundle dos componentes, processar os arquivos de estilo e
 * ficar ouvindo por alterações para realizar um novo build.
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

