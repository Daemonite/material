// ESLint flat config for the docs site scripts (docs-assets/js): plain ES5
// scripts using jQuery, on top of the library rules.
import base from './eslint.config.mjs'
import globals from 'globals'

export default [
  ...base,
  {
    languageOptions: {
      ecmaVersion: 5,
      globals: { ...globals.browser, ...globals.jquery },
      sourceType: 'script'
    },
    rules: {
      '@stylistic/spaced-comment': 'off',
      'no-magic-numbers': 'off',
      'no-var': 'off',
      'object-shorthand': 'off',
      'prefer-arrow-callback': 'off',
      'prefer-rest-params': 'off',
      'prefer-template': 'off',
      'vars-on-top': 'off'
    }
  }
]
