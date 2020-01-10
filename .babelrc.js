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
    '@babel/plugin-proposal-object-rest-spread'
  ]
};
