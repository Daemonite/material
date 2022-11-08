# Changelog of djibe Material UI for Bootstrap 4

*Active fork of Daemonite Material UI.*

## Future releases

- More plugins integration + documentation (Input mask, Calendar)

### 4.6.2 - 2.0

- **New** Upgraded to Material 3 aka Material You.
- New variables: $chip-border-radius

## 4.6.2 - 1.0

- **New** Upgraded to Bootstrap 4.6.2.

## 4.6.1 - 1.0

- **New** Upgraded to Bootstrap 4.6.1.

## 4.6.0 - RC2

- **New** `modal-xl` is the equivalent for the *Full-screen dialog* of Material Design components.
- **New** Documentation search is back thanks to Algolia Docsearch.
- **Fixed** `modal` documentation updated to reflect max sizes.
- **Fixed** `card` overflow behavior reverted to standard BS4.
- **Fixed** `Form-group`: Removed label color on form-group:focus-within.
- **Fixed** Most components with text overflow are now with an ellipsis ...
- **Fixed** `Table-cell` word break.
- **Fixed** Various bugs related to IE11 (`.card-img` aspect ratio, Material Icons, Select2 items alignment, chip close icon).
- **Fixed** Datatables.net search displays suitable number of results.
- **Fixed** Various minor changes.
- **Improved** Datatables.net responsive rendering.
- **Improved** JavaScript compilation.
- Updated build dependencies.

## 4.6.0 - RC1

- **New** Upgraded to Bootstrap 4.6.
- **Updated** docs for BS 4.6.
- **Updated** JS dependencies from BS 4.6.
- **Fixed** Removed link:hover underline.
- **Fixed** `card-actions` ripple effect on buttons.
- **Fixed** `list-group` background-color.
- **Removed** Outdated JS fix for Chromium checkbox focus state.
- Updated build dependencies.

Next release will focus on awesome Dark theme.

## 4.5.3 - RC4 (unreleased)

- **New** NPM package.
- **Fixed** `card-actions` padding-top coming after `card-body` and z-index.
- **Improved** *ionRangeSlider* documentation.

## 4.5.3 - RC3

- **New** [Material Sliders documentation](https://djibe.github.io/material/docs/4.5/material/sliders).
- **Improved** Tabs inverse style + animation.
- **Improved** Material style for table caption, definition lists.
- **Improved** SVG style when used in replacement of Material Icons.
- **Improved** *Flatpickr* Date picker plugin initialization changed from JQuery to pure JavaScript.
- **Improved** `prefers-reduced-motion` media query for all components and dropped useless `_scrollspy.scss`.
- **Improved** Custom CSS scrollbar declaration for Firefox.
- **Fixed** Snackbars transitions + auto-sizing.
- **Fixed** Very long `floating-label`.
- **Fixed** `list-group-item-icon` flex-shrink.
- **Fixed** `data-table` top border.
- **Fixed** Documentation JS crashes due to *Jekyll compress* (// comments in JS failing).

## 4.5.3 - RC2

- **New**. Sliders are designed as Material guidelines 2  
**ionRangeSlider** plugin styled accordingly.
- Removed Dark theme media-query until improvement (opt-in via `$enable-dark-theme-media-query` variable).  
Dark theme can still be used by applying `data-theme="dark"` to `<html>` opening tag (Material > Dark theme documentation).
- **Fixed** `List-group-item-icon` flex-shrink and color.
- **Fixed** `dropdown-toggle` alignment in Navbar.
- **Fixed** Select input styling.
- **Fixed** Select2 plugin. Placeholder color, container max-width, dropup animation.

## 4.5.3 - RC1

- **NEW** Upgrade to Bootstrap 4.5.3.
- **NEW** Dark theme in early version (refer to Material section in documentation).
- **NEW** Material themes for **flatpickr** (which will probably become main Picker) and **Datatables.net**.
- Improved Dialogs/modals on small devices.
- Improved documentation dependencies initialization.
- **Fixed** Form label color and caret color.
- **Fixed** Character counter spacing and visibility (plugin).
- Updated build dependencies.

## 4.5.2 - RC1

- **NEW** Upgrade to Bootstrap 4.5.2
- **NEW** Ripple effect for other components (Card-primary-action, Lists, Menus) based on Ripplet library
- Improved Ripplet JS declaration + upgrade to v0.3x
- **NEW** Material themes for **Autosize**, **ionRangeSlider**, **Select2**, **Maxlength**.  
Import `material-plugins.css`.
- **NEW** Plugin themes integrated in build
- **NEW** Plugins documentation
- **Fixed** Helper text position, `card-body` top padding, Alerts style
- **Fixed** Switch disabled + hover state
- Fixed. Glitches in docs
- Update build dependencies (+ revert stylelint to 0.16.x)

## 4.5.0 - RC1

- **New** Upgrade to Bootstrap 4.5.0  
Moved 4.4.1 to a new branch for those who need it
- **New** Ripple effect for buttons based on [Luncheon awesome Ripplet.js](https://github.com/luncheon/ripplet.js)
- **Fixed** Switch component is back !
- Updated webkit-custom icons as Google Chrome is updated with new icons
- Rework button's CSS
- Updated Roboto font URL
- Improving documentation to reflect BS 4.5.0 changes

## 4.4.1 - RC1

- **New** Label color on form focus (for form-group and form-ripple containers. See Material > Text fields)
- Improve btn-icon-prepend and list-group-item-icon svg color and sizing
- Improve doc for line ripple with text-helper

## 4.4.1 - beta 4

- Cleanup Buttons CSS (background-color, background-image)
- Improve icons in buttons (Material-icons or Fontawesome or SVG)
- Updated documentation
- Updated dependencies

## 4.4.1 - beta 3 (unreleased)

- **New** One-line and two-line lists (see Material > Lists documentation)
- **New** Line ripple for forms/inputs (see Material > Text fields documentation)
- Desactivate _waves.scss for button ripples integration
- Improved documentation

## 4.4.1 - beta 2

- **New** `card-primary-action` class (see Material > Cards documentation)
- Enhenced badges (see Material > Badges documentation)
- `pre` elements now have `user-select: all` to copy-paste code with 1 click
- Enhenced card-links positionning
- Fix button.dropdown-item styling
- Fix btn-float and btn-flat background
- Fix Elevation-shadow crash during build
- Fix toast's z-index leading to inactive Action button
- Cleanup typography classes
- Revert doc TOC from sticky to static for long TOC management
- Revert jQuery to 3.4.1 for Collapse component compatibility
- All dependencies are up to date

## 4.4.1 - beta 1 (unreleased)

- **New** Bootstrap 4.4.1 responsive containers support (`container-md`, ...)
- **New** Full toast/snackbar support
- Global Material documentation overhaul
- **New** Smooth scroll in pure CSS
- **New** .fab-actions container to wrap FAB bottom right of screen

- Improved Bootstrap collapse component
- Many bug fixes (stretched-links, chips, breadcrumbs, pagination, data-tables)
- All build dependencies are up to date

BUG. Elevation-shadow can still crash during build
[todo](https://github.com/twbs/bootstrap/commit/605704d7f5483d62d7c9d7ad14836e3b35a10861)

## 4.4.1 - alpha 2

- Full Bootstrap 4.4.1 support
- Added components according to Density guidelines
- Expansion panels according to MD v2
- Dialog buttons are always flat
- Btn-link styled as btn-flat-primary
- Added btn-xs and btn-icon-prepend

- Improved buttons
- Improved Steppers
- Improved documentation (faster, up to date)
- Improved Dialog transitions
- UPDATED dependencies
- FIXED Links used as buttons aspect on hover

## 4.4.1 - alpha 1

- NPM build fixed by @tiberiumihai
- BS 4.4.1 grid support
- Enhance date picker

FIXED Datepicker autoclosing
FIXED Helper text left padding for textfield-box inputs
FIXED Indeterminate custom checkbox color (when checkbox is not disabled)

## RC-4

FIXED Links used as elements (dropdown-items, ...)  aspect on hover
FIXED Picker input if disabled or readonly

## RC-3

- chips look like Material Design v2
- chip outline style
- chip choice
- chip filter
FIXED Buttons on links hover effect

## RC-2

### Bug fixes

- Modal margins enhanced
- Primary color tweaked
- Tables overflowing of container
