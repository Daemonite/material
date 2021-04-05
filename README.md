# Material 2

> **DISCLAIMER**: This framework was created by [Daemonite team](http://daemonite.github.io/material/). Since they are not active for **now**, we will enhance this framework until they come back to maintain the project.

Djibe's Material UI 2 is a cross-platform and fully responsive front-end interface based on Google Material Design 2 developed by Google.  

The basic idea behind this project is to combine the front-end technology of the popular Bootstrap framework with the visual language of Google Material Design 2.

> A visual language for our users that synthesizes the classic principles of good design with the innovation and possibility of technology and science. This is material design.
> <https://material.io/design/introduction>

Feel free to check out our [documentation site](https://djibe.github.io/material/) or let us know what you think in the Issues tab of this repository.

The primary goal of this project is to give all Bootstrap components and elements a Google Material Design look, so it allows web developers to continue using the exact same Bootstrap HTML markup they are familiar with, but presents them a final outcome that is in line with the principles and specifics of Google Material Design.

A secondary goal of this project is to add support for some unique Google Material Design components such as floating buttons, pickers, and steppers, to name a few, which cannot be achieved by transforming existing Bootstrap components.

Because these components will require additional markup (some may require additional JavaScript), they will be documented separately in Material's documentation. :pray:

This project exists thanks to all the people who takes time to contribute.

<a href="https://github.com/Daemonite/material/graphs/contributors"><img src="https://opencollective.com/material/contributors.svg?width=890&button=false" /></a>

## Table of contents

- [Content](#content)
+ [Running Documentation Locally](#running-documentation-locally)
    + [End-Of-Line Issue Fix](#end-of-line-fix)
      - [Command Notes](#command-notes)
  * [Quick start](#quick-start)

## Content

Within this repository context, you will find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
djibe-material/
├── css/
│   ├── material.css
│   ├── material.css.map
│   ├── material.min.css
│   ├── material.min.css.map
|   ├── material-plugins.css
│   ├── material-plugins.css.map
│   ├── material-plugins.min.css
│   └── material-plugins.min.css.map
└── js/
    ├── material.js
    ├── material.js.map
    ├── material.min.js
    └── material.min.js.map
```

We provide compiled CSS and JavaScript (`material.*`), as well as compiled and minified CSS and JavaScript (`material.min.*`). CSS and JavaScript source maps (`material.*.map`) are also available for use with certain browsers' developer tools.

`material-plugins.css` is an addon containing suitable style for the Plugins (see doc's Plugin section).

The Material 2 source code download includes the precompiled CSS and JavaScript, along with documentation and source assets. More specifically, it includes the following and more:

```
djibe-material/
├── assets/
│   ├── js/
│   └── scss/
├── css/
│   ├── material.css
│   ├── material.css.map
│   ├── material.min.css
│   ├── material.min.css.map
│   ├── material-plugins.css
│   ├── material-plugins.css.map
│   ├── material-plugins.min.css
│   └── material-plugins.min.css.map
├── docs/
│   └── 4.6/
└── js/
    ├── material.js
    ├── material.js.map
    ├── material.min.js
    └── material.min.js.map
```

## Documentation

Material's 2 documentation that is included in this repo located in the root directory, is built with [Jekyll](https://jekyllrb.com/) and publicly hosted on GitHub Pages at <https://djibe.github.io/material/>. The docs can also be hosted locally.

### Running Documentation Locally

1. Run through the [tooling setup](https://djibe.github.io/material/docs/4.6/getting-started/tooling/#getting-started) to install Jekyll and other Ruby dependencies with `bundle install`.
2. Run `npm install` to install Node.js dependencies.
3. Run `npm run dist` and `npm run docs` to rebuild distributed CSS and JavaScript files, as well as docs assets.
4. If you had end-of-line errors when running the commands indicated in step #3 then, please follow [this step](#end-of-line-fix) before proceeding, or else proceed to step #5.
5. From the root `/material` directory, run `npm run docs-serve` in the command line.
6. Open `http://localhost:9999/material` in your browser, and voilà.

### End-Of-Line Fix

This repository uses LF end-of-line mode. When your GitHub is currently set at CRLF end-of-line mode automatically, there will be an error. Which shows the following:
`
Error <File> : Expected linebreaks to be 'LF' but found CRLF
`

This caused by working the repo in multiple OS in which, each OS has different types of string interpretation; and Node.JS doesn't like it.

In order to fix this problem, you have to save all modified files that is not yet committed in the state of the repo and please follow the steps below:

1. `git config core.autocrlf false`
2. `git rm --cached -r .`
3. `git reset --hard`

## Quick start

Several quick start options are available:

- Clone the repo: `git clone https://github.com/djibe/material.git`
- Download the [latest release](https://github.com/djibe/material/releases)
- Install with [npm](https://www.npmjs.com/): `npm install djibe-material`
