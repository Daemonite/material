#!/usr/bin/env node

/*!
 * Script to lint the generated docs with htmllint.
 * Replaces the unmaintained htmllint-cli wrapper, which pulled in a
 * vulnerable yargs-parser (CVE-2020-7608).
 *
 * Usage: node build/htmllint.js <rc file> <glob> [<glob> ...]
 */

'use strict'

const fs = require('fs')
const path = require('path')
const glob = require('glob')
const htmllint = require('htmllint')

const [rcFile, ...patterns] = process.argv.slice(2)

if (!rcFile || patterns.length === 0) {
  console.error('Usage: node build/htmllint.js <rc file> <glob> [<glob> ...]')
  process.exit(2)
}

const config = JSON.parse(fs.readFileSync(path.resolve(rcFile), 'utf8'))

htmllint.use(config.plugins || [])
delete config.plugins

const files = patterns.reduce((acc, pattern) => acc.concat(glob.sync(pattern)), [])

let failedFiles = 0

const lintFile = (file) => Promise.resolve()
  .then(() => htmllint(fs.readFileSync(file, 'utf8'), config))
  .then((issues) => {
    issues.forEach((issue) => {
      console.log(`${file}: line ${issue.line}, col ${issue.column}, ${htmllint.messages.renderIssue(issue)}`)
    })

    return issues.length
  })
  .catch((error) => {
    // Report the failure and keep linting the remaining files
    failedFiles++
    console.error(`[htmllint error in ${file}] ${error}`)

    return 0
  })

Promise.all(files.map(lintFile)).then((counts) => {
  const errorCount = counts.reduce((sum, count) => sum + count, 0)

  console.log(`\n[htmllint] found ${errorCount} errors out of ${files.length} files`)

  if (errorCount > 0 || failedFiles > 0) {
    process.exit(1)
  }
})
