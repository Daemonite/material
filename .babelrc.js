module.exports = {
  presets: [
    [
      '@babel/env',
      {
        exclude: ['transform-typeof-symbol'],
        loose: true,
        modules: false
      }
    ]
  ],
  plugins: [
    process.env.PLUGINS && 'transform-es2015-modules-strip',
    '@babel/proposal-object-rest-spread'
  ].filter(Boolean)
};
