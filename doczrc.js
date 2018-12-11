/**
 * Configurações do Docz.
 * @see https://www.docz.site/documentation/project-configuration
 */
import { css } from 'docz-plugin-css'
import pkg from './package.json'

export default {
  title: 'ios-theme-toolkit',
  description: pkg.description,
  base: '/ios-theme-toolkit/',
  src: './',
  hashRouter: true,
  themeConfig: {
    colors: {
      primary: '#007aff'
    },
    showPlaygroundEditor: false,
  },
  plugins: [
    css({ preprocessor: 'postcss' }),
    css({
      preprocessor: 'less',
      loaderOpts: {
        /* whatever your preprocessor loader accept */
      }
    })
  ],
  port: 8000
}
