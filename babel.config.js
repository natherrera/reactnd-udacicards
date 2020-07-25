module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    overrides: [{
      plugins: [
        '@babel/plugin-transform-modules-commonjs',
      ]
    }]
  };
};
