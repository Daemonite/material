# Material

Daemonite's Material UI is a cross-platform and fully responsive front-end interface based on __Google Material Design__. This lightweight framework is built using __Bootstrap 4__. The basic idea behind this project is to combine the visual language of Google Material Design with the front-end technology of the popular Bootstrap framework.

> A visual language for our users that synthesizes the classic principles of good design with the innovation and possibility of technology and science. This is material design.
> http://www.google.com/design/spec/material-design/introduction.html

Detailed [documentation site](http://daemonite.github.io/material/) is work in progress. Let us know what you think at the [Daemon Labs](http://labs.daemon.com.au) forum.

## Goals

### Primary

The primary goal of this project is to give all Bootstrap components and elements a Material Design look, so it allows web developers to continue using the exact same Bootstrap HTML markup they are familiar with, but presents a final outcome that is in line with the principles and specifics of Google Material Design.

Therefore, the Bootstrap's [documentation](https://v4-alpha.getbootstrap.com/getting-started/introduction/) can serve as a valid documentation for this project as well. Replacing `bootstrap.min.css` on the site with `material.min.css` from this project without any other changes will transform all components and elements into a materialised look.

### Secondary

A secondary goal of this project is to add support of some unique Material Design components such as floating action buttons, pickers and steppers to name a few, which cannot be achieved by transforming existing Bootstrap components or elements.

Because these components will require additional markup (some may require additional JavaScript), they will be documented separately in Material's documentation (work-in-progress).

## Supported Bootstrap 4 Components

Currently based on __Bootstrap v4.0.0-alpha.5__.

| Bootstrap 4 Components       | Equivalent Material Design Components                                                     |
| ---                          | ---                                                                                       |
| Alerts                       | _None, but supported with our own interpretation_                                         |
| Breadcrumb                   | _None, but supported with our own interpretation_                                         |
| Buttons                      | [Buttons](https://material.google.com/components/buttons.html)                            |
| Button group                 | _None, but supported with our own interpretation_                                         |
| Cards                        | [Cards](https://material.google.com/components/cards.html)                                |
| Carousel                     | _None, but supported with our own interpretation_                                         |
| Collapse                     | _None, but supported with our own interpretation_                                         |
| Dropdowns                    | [Menus](https://material.google.com/components/menus.html)                                |
| Forms                        | [Text fields](https://material.google.com/components/text-fields.html)                    |
| Input group                  | [Text fields](https://material.google.com/components/text-fields.html)                    |
| Jumbotron                    | _None, but supported with our own interpretation_                                         |
| List group                   | [Expansion panels](https://material.google.com/components/expansion-panels.html)          |
| Modal                        | [Dialogs](https://material.google.com/components/dialogs.html)                            |
| Navs                         | _None, but supported with our own interpretation_                                         |
| Navbar                       | [Toolbars](https://material.google.com/components/toolbars.html)                          |
| Pagination                   | _None, but supported with our own interpretation_                                         |
| Popovers                     | _None, but supported with our own interpretation_                                         |
| Progress                     | [Progress & activity](https://material.google.com/components/progress-activity.html)      |
| Scrollspy                    | _None, but supported with our own interpretation_                                         |
| Tags                         | [Chips](https://material.google.com/components/chips.html)                                |
| Tooltips                     | [Tooltips](https://material.google.com/components/tooltips.html)                          |
| Utility classes              | _None, but supported with our own interpretation_                                         |

### Additional Supported Bootstrap 4 Elements
* Bootstrap 4's grid system is supported, but breakpoints have been changed according to Material Design [Responsive UI Guidlines](https://material.google.com/layout/responsive-ui.html#responsive-ui-breakpoints).
* Bootstrap 4's responsive utilities are all supported.
* Bootstrap 4's typography classes and HTML tags (also including code, figures and images) are all supported. 

## Supported Material Components

| Material Components             | Equivalent Bootstrap 4 Components                                                   | Additional Information                                                                                                                                                                                                                                                        |
| ---                             | ---                                                                                 | ---                                                                                                                                                                                                                                                                           |
| Bottom navigation               | _None_                                                                              | Todo: currently not supported.                                                                                                                                                                                                                                                |
| Bottom sheets                   | _None_                                                                              | Todo: currently not supported.                                                                                                                                                                                                                                                |
| Buttons                         | [Buttons](http://v4-alpha.getbootstrap.com/components/buttons/)                     | `.btn` for raised buttons, `.btn-flat` and `.btn-outline` for flat buttons.                                                                                                                                                                                                   |
| Buttons: Floating Action Button | _None_                                                                              | Add `.btn-float` on top of a `.btn` for floating action buttons.                                                                                                                                                                                                              |
| Cards                           | [Cards](http://v4-alpha.getbootstrap.com/components/card/)                          | Additional `.card-actions` added to style supplemental action area.                                                                                                                                                                                                           |
| Chips                           | [Tags](http://v4-alpha.getbootstrap.com/components/tag/)                            | Both `.chip` (Material) and `.tag` (Bootstrap) work the same. Bootstrap 4's `.tag-pill` is not supported.                                                                                                                                                                     |
| Data tables                     | [Tables](http://v4-alpha.getbootstrap.com/content/tables/)                          | Todo: `.table-inverse`, `.table-reflow` and `.table-sm`.                                                                                                                                                                                                                      |
| Dialogs                         | [Modal](http://v4-alpha.getbootstrap.com/components/modal/)                         | Both `.dialog` (Material) and `.modal` (Bootstrap) work the same.                                                                                                                                                                                                             |
| Dividers                        | _None_                                                                              | Generally, use `<hr>` with margin utility classes to create dividers. Some specific components have dividers built in that may (e.g. navigation drawers) or may not (e.g. expansion panel) require `.*-divider` classes.                                                      |
| Expansion panels                | [List group](http://v4-alpha.getbootstrap.com/components/list-group/)               | Both `.expansion-panel` (Material) and `.list-group` (Bootstrap) work the same. Collapsed and expanded panels require `.expansion-panel-collapse` class.                                                                                                                      |
| Grid lists                      | _None_                                                                              | Use Bootstrap 4's grid with padding utility classes to create grid lists.                                                                                                                                                                                                     |
| Lists                           | [Media object](http://v4-alpha.getbootstrap.com/layout/media-object/)               | Margin, padding, and vertical-alignment utility classes may be required.                                                                                                                                                                                                      |
| Lists: Controls                 | [Media object](http://v4-alpha.getbootstrap.com/layout/media-object/)               | Margin, padding, and vertical-alignment utility classes may be required.                                                                                                                                                                                                      |
| Menus                           | [Dropdowns](http://v4-alpha.getbootstrap.com/components/dropdowns/)                 | Both `.dropdown-menu` (Bootstrap) and `.menu` (Material) work the same apart from their opening positions as `.menu` overlays the dropdown toggler. `.dropdown-menu-sm` and `.menu-cascading` are added for a cascading menu variation defined in Material Design Gudielines. |
| Navigation drawer               | _None_                                                                              | A default navigation drawer always opens above all other content with a tranparent black backdrop. Permanent (including its different variations), persistent, and temporary navigation drawers are supported, but the mini variant is currently not supported.               |
| Pickers                         | _None_                                                                              | Only date picker is currently supported. Todo: landscape picker.                                                                                                                                                                                                              |
| Progress & activity             | [Progress](http://v4-alpha.getbootstrap.com/components/progress/)                   | Linear progress bar's buffer variation is currently not supported.                                                                                                                                                                                                            |
| Selection controls              | [Forms](http://v4-alpha.getbootstrap.com/components/forms/#checkboxes-and-radios-1) | The on/off slide toggle defined in Material Design Guidelines is supported with `.custom-switch`.                                                                                                                                                                             |
| Sliders                         | _None_                                                                              | Todo: currently not supported.                                                                                                                                                                                                                                                |
| Snackbars & toasts              | _None_                                                                              | Todo: add snackbars & toasts support back.                                                                                                                                                                                                                                    |
| Steppers                        | _None_                                                                              | Only non-clickable stepper is currently supported.                                                                                                                                                                                                                            |
| Subheaders                      | _None_                                                                              | Use colour and typography utility classes to create subheaders.                                                                                                                                                                                                               |
| Tabs                            | [Navs](http://v4-alpha.getbootstrap.com/components/navs/#tabs)                      | `.nav-tabs-bordered`, `.nav-tabs-centered`, `.nav-tabs-fixed`, and `.nav-tabs-scrollable` are added to create certain variations of a tab bar based on Material Design Guidelines.                                                                                            |
| Text fields                     | [Forms](http://v4-alpha.getbootstrap.com/components/forms/)                         | `.floating-label` is required on top of Bootstrap 4's markup to create a text field with a floating label. `.textarea-autosize` is required to create a multi-line text field that automatically breaks to a new line for overflow text.                                      |
| Toolbars                        | [Navbar](http://v4-alpha.getbootstrap.com/components/navbar/)                       | Both `.navbar` (Bootstrap) and `.toolbar` (Material) work the same. `.toolbar-clipped` is equivalent to `.navbar-fixed-top`. `.toolbar-waterfall` requires some custom Javascript to add/remove `.waterfall` class on scroll since Bootstrap 4 removes the affix plugin.      |
| Tooltips                        | [Tooltips](http://v4-alpha.getbootstrap.com/components/tooltips/)                   |                                                                                                                                                                                                                                                                               |
| Widgets                         | _None_                                                                              | This component is not really relevant to web development, so we probably will not actively look into adding support in this framework.                                                                                                                                        |


