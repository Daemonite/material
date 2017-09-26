# Material

Daemonite's Material UI is a cross-platform and fully responsive front-end interface based on __Google Material Design__. This lightweight framework is built using __Bootstrap 4__. The basic idea behind this project is to combine the visual language of Google Material Design with the front-end technology of the popular Bootstrap framework.

> A visual language for our users that synthesizes the classic principles of good design with the innovation and possibility of technology and science. This is material design.
> http://www.google.com/design/spec/material-design/introduction.html

Detailed [documentation site](http://daemonite.github.io/material/) is work in progress. Let us know what you think at the [Daemon Labs](http://labs.daemon.com.au) forum.

## Goals

### Primary

The primary goal of this project is to give all Bootstrap components and elements a Google Material Design look, so it allows web developers to continue using the exact same Bootstrap HTML markup they are familiar with, but presents them a final outcome that is in line with the principles and specifics of Google Material Design.

### Secondary

A secondary goal of this project is to add support for some unique Google Material Design components such as floating buttons and labels, pickers, and steppers, to name a few, which cannot be achieved by transforming existing Bootstrap components.

Because these components will require additional markup (some may require additional JavaScript), they will be documented separately in Material's documentation (work-in-progress).

## Supported Bootstrap 4 Components

Currently based on __Bootstrap v4.0.0-beta__.

| Bootstrap 4 Components | Equivalent Google Material Design Components                                                    |
| ---                    | ---                                                                                             |
| Alerts                 | _None, but supported with our own interpretation_                                               |
| Badge                  | _None, but supported with our own interpretation_                                               |
| Breadcrumb             | _None, but supported with our own interpretation_                                               |
| Buttons                | [Buttons](https://material.google.com/components/buttons.html)                                  |
| Button group           | [Toggle buttons](https://material.io/guidelines/components/buttons.html#buttons-toggle-buttons) |
| Card                   | [Cards](https://material.google.com/components/cards.html)                                      |
| Carousel               | _None, but supported with our own interpretation_                                               |
| Collapse               | _None, but supported with our own interpretation_                                               |
| Dropdowns              | [Menus](https://material.google.com/components/menus.html)                                      |
| Forms                  | [Text fields](https://material.google.com/components/text-fields.html)                          |
| Input group            | [Text fields](https://material.google.com/components/text-fields.html)                          |
| Jumbotron              | _None, but supported with our own interpretation_                                               |
| List group             | [Expansion panels](https://material.google.com/components/expansion-panels.html)                |
| Modal                  | [Dialogs](https://material.google.com/components/dialogs.html)                                  |
| Navs                   | _None, but supported with our own interpretation_                                               |
| Navbar                 | [Toolbars](https://material.google.com/components/toolbars.html)                                |
| Pagination             | _None, but supported with our own interpretation_                                               |
| Popovers               | _None, but supported with our own interpretation_                                               |
| Progress               | [Progress & activity](https://material.google.com/components/progress-activity.html)            |
| Scrollspy              | _None, but supported with our own interpretation_                                               |
| Tooltips               | [Tooltips](https://material.google.com/components/tooltips.html)                                |

### Additional Supported Bootstrap 4 Elements
* Bootstrap 4's grid system is supported, but breakpoints have been changed according to Google Material Design's [Responsive UI Guidlines](https://material.google.com/layout/responsive-ui.html#responsive-ui-breakpoints).
* Bootstrap 4's layout components such as `.media` are all supported.
* Bootstrap 4's typography classes and other content related elements (such as code, figures and images) are all supported.
* Bootstrap 4's utility classes are all supported.

## Supported Material Components

| Material Components             | Equivalent Bootstrap 4 Components                                         | Additional Information                                                                                                                                                                                                                                          |
| ---                             | ---                                                                       | ---                                                                                                                                                                                                                                                             |
| Bottom navigation               | _None_                                                                    | Todo: currently not supported.                                                                                                                                                                                                                                  |
| Bottom sheets                   | _None_                                                                    | Todo: currently not supported.                                                                                                                                                                                                                                  |
| Buttons                         | [Buttons](https://getbootstrap.com/docs/4.0/components/buttons/)          | `.btn` for raised buttons, `.btn-outline` for flat buttons.                                                                                                                                                                                                     |
| Buttons: Floating Action Button | _None_                                                                    | Add `.btn-float` on top of a `.btn` for floating action buttons.                                                                                                                                                                                                |
| Cards                           | [Cards](https://getbootstrap.com/docs/4.0/components/card/)               | Additional `.card-actions` added to style supplemental action area.                                                                                                                                                                                             |
| Chips                           | _None_                                                                    | `.chip` (Material) works slightly different to `.badge` (Bootstrap) and has more functionalities.                                                                                                                                                               |
| Data tables                     | [Tables](https://getbootstrap.com/docs/4.0/content/tables/)               | _None_                                                                                                                                                                                                                                                          |
| Dialogs                         | [Modal](https://getbootstrap.com/docs/4.0/components/modal/)              | Additional `.modal-footer-stacked` added to style stacked full-width buttons.                                                                                                                                                                                   |
| Dividers                        | _None_                                                                    | Generally, use `<hr>` with margin utility classes to create dividers. Some specific components have dividers built in.                                                                                                                                          |
| Expansion panels                | [List group](https://getbootstrap.com/docs/4.0/components/list-group/)    | Additional `.expansion-*` classes added to extend default `.list-group-item`.                                                                                                                                                                                   |
| Grid lists                      | _None_                                                                    | Use Bootstrap 4's grid system with padding utility classes to create grid lists.                                                                                                                                                                                |
| Lists                           | [Media object](https://getbootstrap.com/docs/4.0/layout/media-object/)    | Margin, padding, and vertical-alignment utility classes may be required.                                                                                                                                                                                        |
| Lists: Controls                 | [Media object](https://getbootstrap.com/docs/4.0/layout/media-object/)    | Margin, padding, and vertical-alignment utility classes may be required.                                                                                                                                                                                        |
| Menus                           | [Dropdowns](https://getbootstrap.com/docs/4.0/components/dropdowns/)      | Both `.dropdown-menu` (Bootstrap) and `.menu` (Material) work the same apart from their opening positions. `.dropdown-menu-sm` and `.menu-cascading` are added for a cascading menu variation defined in Google Material Design.                                |
| Navigation drawer               | _None_                                                                    | A default navigation drawer always opens above all other content with a tranparent black backdrop. Permanent (including its different variations), persistent, and temporary navigation drawers are supported, but the mini variant is currently not supported. |
| Pickers                         | _None_                                                                    | Only date picker is currently supported. Todo: landscape picker.                                                                                                                                                                                                |
| Progress & activity             | [Progress](https://getbootstrap.com/docs/4.0/components/progress/)        | Circular and indeterminate linear progress are added on top of default linear progress.                                                                                                                                                                         |
| Selection controls              | [Forms](https://getbootstrap.com/docs/4.0/components/forms/#custom-forms) | The slide toggle defined in Google Material Design is supported with `.custom-switch`.                                                                                                                                                                          |
| Sliders                         | _None_                                                                    | Todo: currently not supported.                                                                                                                                                                                                                                  |
| Snackbars & toasts              | _None_                                                                    | Todo: add snackbars & toasts support back.                                                                                                                                                                                                                      |
| Steppers                        | _None_                                                                    | Only non-clickable stepper is currently supported.                                                                                                                                                                                                              |
| Subheaders                      | _None_                                                                    | Use colour and typography utility classes to create subheaders.                                                                                                                                                                                                 |
| Tabs                            | [Navs](https://getbootstrap.com/docs/4.0/components/navs/#tabs)           | `.nav-tabs-scrollable` is added for scrollable tab bars.                                                                                                                                                                                                        |
| Text fields                     | [Forms](https://getbootstrap.com/docs/4.0/components/forms/)              | `.floating-label`, `.textarea-autosize` and `.textfield-box` are added.                                                                                                                                                                                         |
| Toolbars                        | [Navbar](https://getbootstrap.com/docs/4.0/components/navbar/)            | `.toolbar-waterfall` requires some custom JavaScript to add/remove `.waterfall` class on `scroll` since Bootstrap 4 removes the affix plugin.                                                                                                                   |
| Tooltips                        | [Tooltips](https://getbootstrap.com/docs/4.0/components/tooltips/)        | _None_                                                                                                                                                                                                                                                          |
| Widgets                         | _None_                                                                    | This component is not relevant to web development, so we will not actively look into this.                                                                                                                                                                      |
