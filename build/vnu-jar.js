#!/usr/bin/env node

/*!
 * Script to run vnu-jar if Java is available.
 * Copyright 2017-2018 The Bootstrap Authors
 * Copyright 2017-2018 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

'use strict'

const childProcess = require('child_process')

// vnu-jar exports the path to vnu.jar as a boxed `String`; unbox it.
const vnu = String(require('vnu-jar'))

// Use the `java` on PATH only. Unlike `npx vnu`, this never makes vnu-jar
// download a Java runtime. Without Java the check is skipped, so contributors
// without Java can still run `npm run docs`.
childProcess.execFile('java', ['-version'], (error, stdout, stderr) => {
  if (error) {
    console.error('Skipping vnu-jar test; Java is missing. Install Java 11 or later to validate the docs.')
    return
  }

  const is32bitJava = !stderr.match(/64-Bit/)

  // Messages to ignore. vnu-jar joins these with `|` and matches each message
  // against the whole pattern as a regular expression.
  // Patterns match the message text vnu uses internally: curly quotes, even
  // though `--asciiquotes` prints straight ones. Keep each pattern as specific
  // as possible, and fix the markup instead of adding a pattern where you can.
  const ignores = [
    // `autocomplete="off"` on the inputs and buttons of the toggle button demos
    // stops Firefox from keeping their state across page loads. Bootstrap
    // recommends it, but the HTML spec only allows `autocomplete` on text-like
    // inputs.
    'Attribute “autocomplete” is only allowed when the input type is “color”, “date”, “datetime-local”, “email”, “hidden”, “month”, “number”, “password”, “range”, “search”, “tel”, “text”, “time”, “url”, or “week”.',
    'Attribute “autocomplete” not allowed on element “button” at this point.',
    // Info only: the icons page shows Material Icons code points, which are in
    // the Unicode Private Use Area.
    'Document uses the Unicode Private Use Area\\(s\\), which should not be used in publicly exchanged documents. \\(Charmod C073\\)',
    // Info only: Jekyll and the docs write void elements as `<br />`.
    'Trailing slash on void elements has no effect and interacts badly with unquoted attribute values.'
  ].join('|')

  const args = [
    '-jar',
    vnu,
    '--asciiquotes',
    '--filterpattern',
    ignores,
    '--skip-non-html',
    'gh-pages/'
  ]

  // For the 32-bit Java we need to pass `-Xss512k`
  if (is32bitJava) {
    args.unshift('-Xss512k')
  }

  childProcess.spawn('java', args, {
    stdio: 'inherit'
  }).on('error', (spawnError) => {
    console.error(`Could not run vnu-jar: ${spawnError.message}`)
    process.exit(1)
  }).on('exit', (code, signal) => {
    if (signal) {
      console.error(`vnu-jar was stopped by ${signal}.`)
    }

    process.exit(signal ? 1 : code)
  })
})
