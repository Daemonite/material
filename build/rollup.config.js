import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'

const pkg      = require('../package.json')
const year     = new Date().getFullYear()

const globals = {
  'jquery': 'jQuery'
}

const config  = [
  nodeResolve(),
  commonjs({
    sourceMap: false
  }),
  babel({
    exclude: 'node_modules/**'
  })
]

export default {
  input: 'assets/js/index.js',
  // TODO: https://stackoverflow.com/questions/55112048/rollup-babel-preset-env-babel-polyfill
  output: {
    banner: `/*!\n * Djibe Material v${pkg.version} (${pkg.homepage})\n * Copyright 2011-${year} ${pkg.author}\n * Licensed under MIT (https://github.com/djibe/material/blob/master/LICENSE)\n */\n`,
    file: 'js/material.js',
    format: 'cjs',
    globals,
    name: 'material'
  },
  plugins: config
}
