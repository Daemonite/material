import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'

const pkg      = require('../package.json')
const year     = new Date().getFullYear()

const external = ['jquery']
const globals = {
  jquery: 'jQuery'
}

const pluginsConfig = [
  nodeResolve(),
  commonjs({
    sourceMap: false
  }),
  babel({
    babelHelpers: 'bundled',
    exclude: 'node_modules/**',
    ignore: [
      /\/core-js/
    ],
    sourceType: 'unambiguous',
    presets: [
      [
        '@babel/preset-env',
        {
          bugfixes: true,
          forceAllTransforms: true,
          modules: false,
          // useBuiltIns: 'usage', // For complete polyfill
          // shippedProposals: true,
          corejs: {
            version: '3.10',
            proposals: true
          }
        }
      ]
    ]
  })
]

export default {
  external,
  input: 'assets/js/index.js',
  output: {
    banner: `/*!\n * Djibe Material v${pkg.version} (${pkg.homepage})\n * Copyright 2011-${year} ${pkg.author}\n * Licensed under MIT (https://github.com/djibe/material/blob/master/LICENSE)\n */\n`,
    file: 'js/material.js',
    format: 'umd',
    globals,
    name: 'material'
  },
  context: 'this',
  plugins: pluginsConfig
}
