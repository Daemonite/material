# CHANGELOG

## 4.4.1 - beta 2

* New card-primary-action class (see Material > Cards documentation)
* Enhenced badges (see Material > Badges documentation)
* `pre` elements now have `user-select: all` to copy-paste code with 1 click
* Enhenced card-links positionning
* Fix button.dropdown-item styling
* Fix btn-float + btn-flat background
* Fix Elevation-shadow can still crash during build
* Fix toast z-index leading to inactive Action button
* Cleanup typography classes
* Revert doc TOC from sticky to static for long TOC management
* Revert jQuery to 3.4.1 for Collapse component compatibility
* All dependencies are up to date

## 4.4.1 - beta 1

+ Bootstrap 4.4.1 responsive containers support
+ Full toast/snackbar support
+ Global Material documentation overhaul
+ Smooth scroll in pure CSS
+ New .fab-actions container to wrap FAB bottom right of screen

* Improved Bootstrap collapse component
* Many bug fixes (stretched-links, chips, breadcrumbs, pagination, data-tables)
* All build dependencies are up to date

BUG. Elevation-shadow can still crash during build
todo https://github.com/twbs/bootstrap/commit/605704d7f5483d62d7c9d7ad14836e3b35a10861

## 4.4.1 - alpha 2

+ Full Bootstrap 4.4.1 support
+ Added components according to Density guidelines
+ Expansion panels according to MD v2
+ Dialog buttons are always flat
+ Btn-link styled as btn-flat-primary
+ Added btn-xs and btn-icon-prepend

* Improved buttons
* Improved Steppers
* Improved documentation (faster, up to date)
* Improved Dialog transitions
* UPDATED dependencies
* FIXED Links used as buttons aspect on hover

## 4.4.1 - alpha 1

+ NPM build fixed by @tiberiumihai
+ BS 4.4.1 grid support
+ Enhance date picker

FIXED Datepicker autoclosing
FIXED Helper text left padding for textfield-box inputs
FIXED Indeterminate custom checkbox color (when checkbox is not disabled)

## RC-4

FIXED Links used as elements (dropdown-items, ...)  aspect on hover
FIXED Picker input if disabled or readonly

## RC-3

+ chips look like Material Design v2
+ chip outline style
+ chip choice
+ chip filter
FIXED Buttons on links hover effect

## RC-2

### Bug fixes

* Modal margins enhanced
* Primary color tweaked
* Tables overflowing of container

### Removals

Because they are no longer in Material design guidelines.
* Vertical card actions