# Material

[![Backers on Open Collective](https://opencollective.com/material/backers/badge.svg)](#backers)
[![Sponsors on Open Collective](https://opencollective.com/material/sponsors/badge.svg)](#sponsors) 

Daemonite's Material UI is a cross-platform and fully responsive front-end interface based on Google Material Design developed using Bootstrap 4.

The basic idea behind this project is to combine the front-end technology of the popular Bootstrap framework with the visual language of Google Material Design.

> We challenged ourselves to create a visual language for our users that synthesizes the classic principles of good design with the innovation and possibility of technology and science. This is material design.
>
> — [Material Design guidelines (2014–2017 archive)](https://m1.material.io/material-design/introduction.html)

Feel free to check out our [documentation site](https://daemonite.github.io/material/), or report bugs and ask questions in [GitHub issues](https://github.com/Daemonite/material/issues).

The primary goal of this project is to give all Bootstrap components and elements a Google Material Design look, so it allows web developers to continue using the exact same Bootstrap HTML markup they are familiar with, but presents them a final outcome that is in line with the principles and specifics of Google Material Design.

A secondary goal of this project is to add support for some unique Google Material Design components such as floating buttons, pickers, and steppers, to name a few, which cannot be achieved by transforming existing Bootstrap components.

Because these components will require additional markup (some may require additional JavaScript), they will be documented separately in Material's documentation.

## Project status

Material is in **maintenance mode**:

- The current release, 4.1.1, is built on Bootstrap 4.1 and follows the original Material Design guidelines (before Google's 2018 refresh).
- We maintain 4.x with dependency updates, security fixes and bug fixes. Issues and pull requests that fix bugs are welcome. Visual redesigns and new features beyond Bootstrap 4 compatibility are out of scope for now.
- Next up is a maintenance release built on Bootstrap 4.6.2, the final Bootstrap 4 release ([#333](https://github.com/Daemonite/material/issues/333)). It adds Material styling for the components Bootstrap introduced since 4.1, such as toasts and spinners.
- Bootstrap 5 will be considered once the 4.6 release has bedded down.

If you need Bootstrap 4.6 or newer Material styling today, take a look at [djibe's fork](https://github.com/djibe/material) (`djibe-material` on npm).

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

## Table of contents

- [Project status](#project-status)
- [Content](#content)
- [Documentation](#documentation)
- [Quick start](#quick-start)
- [License](#license)

## Content

The compiled download (`material-<version>-dist.zip` on the [releases page](https://github.com/Daemonite/material/releases)) contains the following directories and files, with both compiled and minified variations:

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

The source code archive on GitHub, like a clone of the repo, includes the precompiled CSS and JavaScript along with the documentation and source assets:

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
│   └── 4.6/
└── js/
    ├── material.js
    ├── material.js.map
    ├── material.min.js
    └── material.min.js.map
```

The npm package contains `assets/` (the Sass and JavaScript source), `css/` and `js/`.

### Sass

The Sass entry point is `assets/scss/material.scss` (the `sass` field in `package.json`). It uses the Sass module system, so it needs [Dart Sass](https://sass-lang.com/dart-sass/) 1.79.0 or newer:

```scss
@use 'pkg:daemonite-material' as material with (
  $primary: (color: #3f51b5, dark: #303f9f, light: #c5cae9)
);

.my-component {
  padding: material.$spacer;

  @include material.media-breakpoint-up(md) {
    display: flex;
  }
}
```

`pkg:` URLs need `--pkg-importer=node`. You can also add `node_modules` to your load paths and `@use 'daemonite-material/assets/scss/material'`. See the [theming docs](https://daemonite.github.io/material/docs/4.1/getting-started/theming/#sass) for loading parts of Material and overriding variables.

**Breaking change since 4.1.1:** LibSass and node-sass can no longer compile Material's Sass. If you can't move to Dart Sass, stay on 4.1.1 or use the compiled CSS. With Dart Sass, `$var: value; @import '.../material';` still works for now, but Sass deprecates `@import`, so switch to `@use ... with (...)`.

## Documentation

Material's documentation, included in this repo in the root directory, is built with [Jekyll](https://jekyllrb.com/) and publicly hosted on GitHub Pages at <https://daemonite.github.io/material/>. The docs may also be run locally.

### Running documentation locally

1. Run through the [tooling setup](https://daemonite.github.io/material/docs/4.6/getting-started/tooling/#getting-started) to install Ruby (3.2 or newer), Jekyll and the other Ruby dependencies with `bundle install`.
2. Install Java 11 or later and put it on your `PATH`. `npm run docs` uses it to validate the docs with `vnu-jar`, and skips that check without it. Without Java, `vnu-jar`'s install script also downloads an unverified Java runtime from GitHub, which the build never uses, so install Java before step 3.
3. Run `npm install` to install Node.js dependencies. The build tools need Node.js 22 LTS (see `.nvmrc`).
4. Run `npm run dist` and `npm run docs` to rebuild distributed CSS and JavaScript files, as well as docs assets.
5. From the root of the repo, run `npm run docs-serve` in the command line.
6. Open `http://localhost:9999/material` in your browser, and voilà.

## Quick start

Several quick start options are available:

- Clone the repo: `git clone https://github.com/Daemonite/material.git`
- Download the [latest release](https://github.com/Daemonite/material/releases)
- Install with [npm](https://www.npmjs.com/): `npm install daemonite-material`

The latest published release is 4.1.1. Fixes made since then are on `master` and will ship in the next release. Bower is deprecated, so we no longer recommend installing with it.

## License

Code released under the [MIT License](LICENSE).
