#!/usr/bin/env node

/*!
 * Script to report the gzipped size of the dist files listed in the
 * "bundlesize" field of package.json.
 * Replaces the bundlesize package, whose dependency tree (bundlesize and
 * github-build) pins vulnerable axios releases.
 */

'use strict'

const fs = require('fs')
const path = require('path')
const zlib = require('zlib')
const pkg = require('../package.json')

const root = path.join(__dirname, '..')
let failed = false

pkg.bundlesize.forEach((file) => {
  if (file.maxSize || file.compression) {
    console.error(`${file.path}: "maxSize" and "compression" are not supported by build/bundlesize.js`)
    failed = true
    return
  }

  const filePath = path.join(root, file.path)

  if (!fs.existsSync(filePath)) {
    console.error(`${file.path}: file not found`)
    failed = true
    return
  }

  // Same settings the bundlesize package used: utf8 source, gzip level 9
  const size = zlib.gzipSync(fs.readFileSync(filePath, 'utf8'), { level: 9 }).length

  console.log(`${file.path}: ${(size / 1024).toFixed(2)}KB (gzip)`)
})

if (failed) {
  process.exit(1)
}
