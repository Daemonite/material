---
layout: docs
title: Tooling
description: Learn how to use Material's included npm scripts to build our documentation, compile source code, and more.
group: getting-started
redirect_from:
  - /docs/4.1/getting-started/tooling/
toc: true
---

## Getting started

Material uses [NPM scripts](https://docs.npmjs.com/misc/scripts) for its build system. Our [package.json]({{ site.repo }}/blob/v{{ site.current_version }}/package.json) includes convenient methods for working with the framework.

To use our build system, you'll need a copy of Material's source code and Node. Follow these steps and you should be ready to rock:

1. Install [Java](https://adoptium.net/) 11 or later and put `java` on your `PATH` **before** you install the npm dependencies. `npm run docs` validates the built docs with the [Nu Html Checker](https://validator.github.io/validator/) (`vnu-jar`), which runs on Java. Without Java, the check is skipped. In that case, `vnu-jar`'s install script also downloads a Temurin Java runtime from GitHub into `node_modules/.cache/vnu-jar` without verifying a checksum. Our build never uses that runtime, so install Java first to avoid the download.
2. [Download and install Node.js](https://nodejs.org/download/) **version 22 LTS**, which we use to manage our dependencies. The repo's `.nvmrc` pins Node 22: with nvm or fnm, run `nvm use` or `fnm use` in the repo (or enable your version manager's switch-on-`cd` shell hook). Then navigate to the root `/daemonite-material` directory and run `npm install` to install local dependencies.
3. [Install Ruby](https://www.ruby-lang.org/en/documentation/installation/) (3.2 or newer), install [Bundler](https://bundler.io/) with `gem install bundler`, and then run `bundle install`. This will install all Ruby dependencies, such as Jekyll and plugins.
  - **Windows users:** Read [this guide](https://jekyllrb.com/docs/windows/) to get Jekyll up and running without problems.

When completed, you'll be able to run the various commands provided from the command line. Our [package.json]({{ site.repo }}/blob/v{{ site.current_version }}/package.json) includes the following commands and tasks:

| Task           | Description |
| ---            | --- |
| `npm run dist` | `npm run dist` creates the `/css` and `/js` directories with compiled files. |
| `npm run docs` | Builds CSS and JavaScript for docs, builds the docs with Jekyll and lints the result (htmllint, plus the Nu Html Checker when Java is installed). You can then run the documentation locally via `npm run docs-serve`. |

Run `npm run` to see all the npm scripts.

## Local documentation

Running our documentation locally requires the use of [Jekyll](https://jekyllrb.com/docs/home/), a decently flexible static site generator that provides us: basic includes, Markdown-based files, templates, and more. Here's how to get it started:

1. Run through the [getting started guide](#getting-started) above to install Jekyll and other Ruby dependencies with `bundle install`.
2. From the root `/daemonite-material` directory, run `npm run docs-serve` in the command line.
3. Open `http://localhost:9999/material` in your browser, and voilà.

## PostCSS

Material uses [Autoprefixer](https://github.com/postcss/autoprefixer) (included in our build process) to automatically add vendor prefixes to some CSS properties at build time. Doing so saves us time and code by allowing us to write key parts of our CSS a single time while eliminating the need for vendor mixins.

We maintain the list of browsers supported in our [package.json]({{ site.repo }}/blob/v{{ site.current_version }}/package.json) file.
