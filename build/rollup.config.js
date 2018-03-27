'use strict'

import commonjs from 'rollup-plugin-commonjs';

const babel    = require('rollup-plugin-babel')
const path     = require('path')
const resolve  = require('rollup-plugin-node-resolve')

const pkg      = require(path.resolve(__dirname, '../package.json'))
const year     = new Date().getFullYear()


const external = ['jquery']

const globals = {
  'jquery': 'jQuery'
}

const plugins  = [
  babel({
    exclude: 'node_modules/**',
    externalHelpersWhitelist: [
      'createClass',
      'defineProperty',
      'objectSpread'
    ]
  }),
  commonjs({
    sourceMap: false
  }),
  resolve()
]

module.exports = {
  external,
  input: path.resolve(__dirname, '../assets/js/index.js'),
  output: {
    banner: `/*!\n * Daemonite Material v${pkg.version} (${pkg.homepage})\n * Copyright 2011-${year} ${pkg.author}\n * Licensed under MIT (https://github.com/Daemonite/material/blob/master/LICENSE)\n */\n`,
    file: path.resolve(__dirname, `../js/material.js`),
    format: 'umd',
    globals,
    name: 'material'
  },
  plugins
}
