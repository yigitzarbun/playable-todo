const webpack = require("webpack");

module.exports = function override(config, env) {
  // Add fallback for 'zlib' module
  config.resolve.fallback = {
    zlib: require.resolve("browserify-zlib"),
  };

  // Add webpack plugin to handle 'process' global variable
  config.plugins.push(
    new webpack.ProvidePlugin({
      process: "process/browser",
    })
  );

  return config;
};
