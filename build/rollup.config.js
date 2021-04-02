import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'

const pkg      = require('../package.json')
const year     = new Date().getFullYear()

const globals = {
  'jquery': '$'
}

const config  = [
  nodeResolve(),
  commonjs(),
  babel({
    exclude: 'node_modules/**',
    sourceType: 'unambiguous',
    presets: [
      [
        '@babel/preset-env',
        {
          bugfixes: true,
          forceAllTransforms: true,
          loose: true,
          modules: false,
          spec: true,
          useBuiltIns: 'usage',
          corejs: {
            version: 3,
            proposals: false
          }
        }
      ]
    ]
  })
]

export default {
  input: 'assets/js/index.js',
  // TODO: https://stackoverflow.com/questions/55112048/rollup-babel-preset-env-babel-polyfill
  output: {
    banner: `/*!\n * Djibe Material v${pkg.version} (${pkg.homepage})\n * Copyright 2011-${year} ${pkg.author}\n * Licensed under MIT (https://github.com/djibe/material/blob/master/LICENSE)\n */\n`,
    file: 'js/material.js',
    format: 'umd',
    globals,
    name: 'material'
  },
  context: 'this',
  plugins: config
}
