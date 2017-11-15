'use strict'

module.exports = (ctx) => ({
  map: {
    annotation: true,
    inline: false,
    sourcesContent: true
  },
  plugins: {
    autoprefixer: ctx.env === 'prefix' ? {
      cascade: false
    } : false,
    cssnano: ctx.env === 'minify' ? {
      "preset": [
        "default"
      ]
    } : false
  }
})
