#!/usr/bin/env node

/*!
 * Script to run vnu-jar if Java is available.
 * Copyright 2017-2018 The Bootstrap Authors
 * Copyright 2017-2018 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

'use strict'

const childProcess = require('child_process')
const vnu = require('vnu-jar')

childProcess.exec('java -version', (error, stdout, stderr) => {
  if (error) {
    console.error('Skipping vnu-jar test; Java is missing.')
    return
  }

  const is32bitJava = !stderr.match(/64-Bit/)

  // vnu-jar accepts multiple ignores joined with a `|`.
  // Also note that the ignores are regular expressions.
  const ignores = [
    'Attribute “autocomplete” is only allowed when the input type is.*',
    'Attribute “autocomplete” not allowed on element “button” at this point.',
    'Bad value “https://fonts.googleapis.com/css\\?family=.*',
    'Document uses the Unicode Private Use Area\\(s\\).*',
    'Element “img” is missing required attribute “src”.',
    'Element “legend” not allowed as child of element “div” in this context.*',
    'The “datetime-local” input type is not supported in all browsers.*'
  ].join('|')

  const args = [
    '-jar',
    vnu,
    '--asciiquotes',
    `--filterpattern "${ignores}"`,
    '--skip-non-html',
    'gh-pages/'
  ]

  // For the 32-bit Java we need to pass `-Xss512k`
  if (is32bitJava) {
    args.splice(0, 0, '-Xss512k')
  }

  return childProcess.spawn('java', args, {
    shell: true,
    stdio: 'inherit'
  }).on('exit', process.exit)
})
