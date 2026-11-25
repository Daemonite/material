import { babel } from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import { createRequire } from 'node:module'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import path from 'node:path'

const require  = createRequire(import.meta.url)
const root     = path.resolve(import.meta.dirname, '..')

const pkg      = require(path.join(root, 'package.json'))
const year     = new Date().getFullYear()


const external = ['jquery']

const globals = {
  'jquery': 'jQuery'
}

const plugins  = [
  nodeResolve(),
  commonjs(),
  // Babel runs last so it sees the converted CommonJS (pickadate) as well as our ES modules;
  // `bundled` inlines just the helpers the code uses, once, at the top of the bundle.
  babel({
    babelHelpers: 'bundled',
    exclude: 'node_modules/**'
  })
]

export default {
  external,
  input: path.join(root, 'assets/js/index.js'),
  output: {
    banner: `/*!\n * Daemonite Material v${pkg.version} (${pkg.homepage})\n * Copyright 2011-${year} ${pkg.author}\n * Licensed under MIT (https://github.com/Daemonite/material/blob/master/LICENSE)\n */\n`,
    file: path.join(root, 'js/material.js'),
    format: 'umd',
    globals,
    name: 'material'
  },
  plugins
}
