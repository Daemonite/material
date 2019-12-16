# Material

[![Backers on Open Collective](https://opencollective.com/material/backers/badge.svg)](#backers)
[![Sponsors on Open Collective](https://opencollective.com/material/sponsors/badge.svg)](#sponsors)

> **DISCLAIMER**: This framework has been created by [Daemonite team](http://daemonite.github.io/material/). As they are not active for now, we enhence this framework until they come back to maintain the project.

Daemonite's Material UI 2 is a cross-platform and fully responsive front-end interface based on Google Material Design 2 developed using Bootstrap 4.

The basic idea behind this project is to combine the front-end technology of the popular Bootstrap framework with the visual language of Google Material Design 2.

> A visual language for our users that synthesizes the classic principles of good design with the innovation and possibility of technology and science. This is material design.
> https://material.io/design/introduction/

Feel free to check out our [documentation site](http://djibe.github.io/material2/) or let us know what you think in the Issues tab of this repository.

The primary goal of this project is to give all Bootstrap components and elements a Google Material Design look, so it allows web developers to continue using the exact same Bootstrap HTML markup they are familiar with, but presents them a final outcome that is in line with the principles and specifics of Google Material Design.

A secondary goal of this project is to add support for some unique Google Material Design components such as floating buttons, pickers, and steppers, to name a few, which cannot be achieved by transforming existing Bootstrap components.

Because these components will require additional markup (some may require additional JavaScript), they will be documented separately in Material's documentation.

## :pray:

This project exists thanks to all the people who contribute.

<a href="https://github.com/Daemonite/material/graphs/contributors"><img src="https://opencollective.com/material/contributors.svg?width=890&button=false" /></a>

### Backers

Thank you to all our backers! [[Become a backer](https://opencollective.com/material#backer)]

<a href="https://opencollective.com/material#backers" target="_blank"><img src="https://opencollective.com/material/backers.svg?width=890"></a>

### Sponsors

Support this project by becoming a sponsor. Your logo will show up here with a link to your website. [[Become a sponsor](https://opencollective.com/material#sponsor)]

<a href="https://opencollective.com/material/sponsor/0/website" target="_blank"><img src="https://opencollective.com/material/sponsor/0/avatar.svg"></a>
<a href="https://opencollective.com/material/sponsor/1/website" target="_blank"><img src="https://opencollective.com/material/sponsor/1/avatar.svg"></a>
<a href="https://opencollective.com/material/sponsor/2/website" target="_blank"><img src="https://opencollective.com/material/sponsor/2/avatar.svg"></a>
<a href="https://opencollective.com/material/sponsor/3/website" target="_blank"><img src="https://opencollective.com/material/sponsor/3/avatar.svg"></a>
<a href="https://opencollective.com/material/sponsor/4/website" target="_blank"><img src="https://opencollective.com/material/sponsor/4/avatar.svg"></a>
<a href="https://opencollective.com/material/sponsor/5/website" target="_blank"><img src="https://opencollective.com/material/sponsor/5/avatar.svg"></a>
<a href="https://opencollective.com/material/sponsor/6/website" target="_blank"><img src="https://opencollective.com/material/sponsor/6/avatar.svg"></a>
<a href="https://opencollective.com/material/sponsor/7/website" target="_blank"><img src="https://opencollective.com/material/sponsor/7/avatar.svg"></a>
<a href="https://opencollective.com/material/sponsor/8/website" target="_blank"><img src="https://opencollective.com/material/sponsor/8/avatar.svg"></a>
<a href="https://opencollective.com/material/sponsor/9/website" target="_blank"><img src="https://opencollective.com/material/sponsor/9/avatar.svg"></a>

## Table of contents

- [Content](#content)
- [Documentation](#documentation)
- [Quick start](#quick-start)

## Content

Within the download you will find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
daemonite-material/
├── css/
│   ├── material.css
│   ├── material.css.map
│   ├── material.min.css
│   └── material.min.css.map
└── js/
    ├── material.js
    ├── material.js.map
    ├── material.min.js
    └── material.min.js.map
```

We provide compiled CSS and JavaScript (`material.*`), as well as compiled and minified CSS and JavaScript (`material.min.*`). CSS and JavaScript source maps (`material.*.map`) are available for use with certain browsers' developer tools.

The Material source code download includes the precompiled CSS and JavaScript, along with documentation and source assets. More specifically, it includes the following and more:

```
daemonite-material/
├── assets/
│   ├── js/
│   └── scss/
├── css/
│   ├── material.css
│   ├── material.css.map
│   ├── material.min.css
│   └── material.min.css.map
├── docs/
│   └── 4.4/
└── js/
    ├── material.js
    ├── material.js.map
    ├── material.min.js
    └── material.min.js.map
```

## Documentation

Material's documentation, included in this repo in the root directory, is built with [Jekyll](https://jekyllrb.com/) and publicly hosted on GitHub Pages at <http://djibe.github.io/material2/>. The docs may also be run locally.

### Running documentation locally

1. Run through the [tooling setup](http://djibe.github.io/material2/docs/4.4/getting-started/tooling/#getting-started) to install Jekyll and other Ruby dependencies with `bundle install`.
2. Run `npm install` to install Node.js dependencies.
3. Run `npm run dist` and `npm run docs` to rebuild distributed CSS and JavaScript files, as well as docs assets.
4. From the root `/material2` directory, run `npm run docs-serve` in the command line.
5. Open `http://localhost:9999/material2` in your browser, and voilà.

## Quick start

Several quick start options are available:

- Clone the repo: `git clone https://github.com/djibe/material2.git`
- Download the [latest release](https://github.com/Daemonite/material/releases)
- Install with [bower](https://bower.io/): **TODO**
- Install with [npm](https://www.npmjs.com/): **TODO**
