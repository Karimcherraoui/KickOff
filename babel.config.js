module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', '@babel/preset-env', '@babel/preset-react'],
    plugins: ['@babel/plugin-transform-runtime'],
    env: {
      test: {
        presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
        plugins: ['@babel/plugin-transform-modules-commonjs'],
      },
    },
  };
};
