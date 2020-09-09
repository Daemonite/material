# CHANGELOG

## Next release

More plugins integration + documentation (Datatables, Flatpickr)

Later: Dark theme

## 4.5.2 - RC1

- **NEW** Upgrade to Bootstrap 4.5.2  
To dig in:  
#30965: Improve floating labels example in IE
#30966: Improve floating labels with Edge and a general refactor
- **NEW** Ripple effect for other components (Card-primary-action, Lists, Menus) based on Ripplet library
- Improved Ripplet JS declaration + upgrade to v0.3x
- **Fixed** Helper text position, `card-body` top padding, Alerts style
- **NEW** Material themes for **Autosize**, **ionRangeSlider**, **Select2**. Use material-plugins.css
- **NEW** Plugin themes integrated in build
- **NEW** Plugins documentation (3 above + Maxlength)
- Update build dependencies (and revert to stylelint 0.16.x)

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
