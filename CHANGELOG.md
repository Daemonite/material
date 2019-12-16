# CHANGELOG

## What's in next version 4.4.1 - alpha 2
Expansion panels according to MD v2
Links used as buttons aspect on hover

CSS
https://github.com/twbs/bootstrap/pull/28275
    #27890: Fix buttons :focus state styles
    #28275: Change :disabled to [disabled] for Edge
    #28328: Change word-break: break-word to word-wrap: break-word in <code> elements
    #28365: Fix border if only one card in accordion
    #28400: Disable _assert-ascending function's check if the previous unit was a percent value
    #28417: Fix scrollbars in screenreader utilities
    #28447: Prevent form validation mixin from generating invalid CSS
    #28464: Sync plain text font-size with $input-font-size
    #28530: Fix prefers-reduced-motion for animated progress bars
    #28567: Remove duplicate $table-dark-color variable
    #28585, #28775: Calculate modal header/footer border radius according to the border width
    #28633: Add variable for .custom-control-label's color
    #28733: Fix incorrect variable for popover border radius
    #28782, #28785: Cleanup .input-group's use of flex-basis.
    #28784: Adjust z-index on pagination according to our z-index rules
    #28814: Fix background position for form-validation
    #28852: Adjust position of browser validation messages on custom checks and radios
    #28883: Add width and height to SVG background-images for IE10
    #28938: Deprecated bg-variant() mixin
    #28944: Move to exclamation icon on invalid form fields to avoid implying "clear field" functionality
    #28956: Remove redundant radius properties on .list-group-item
    #29077: Use escape-svg() function
    #29095: Add responsive containers
    https://github.com/twbs/bootstrap/commit/2892675f65d0089fc907f664dfee6487e95d95cc
    #29268 Deprecate text-emphasis-variant() mixin
    #29073: Add row columns for responsive card decks and more

## 4.4.1 - alpha 1
+ NPM support by @tiberiumihai
+ BS 4.4.1 grid support
+ Enhenced date picker

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

* Modal margins enhenced
* Primary color tweaked
* Tables overflowing of container

### Removals

Because they are no longer in Material design guidelines.
* Vertical card actions