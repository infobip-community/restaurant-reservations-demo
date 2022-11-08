const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = function override(config, env) {
  // if (!config.plugins) {
  //   config.plugins = [];
  // }
  // config.plugins.push([new NodePolyfillPlugin()]);
  //   new CopyWebpackPlugin({
  //     patterns: [
  //       {
  //         from: "Buffer",
  //         to: "buffer",
  //       },
  //     ],
  //   })
  // );
  // config.plugins.push(
  //   new CopyWebpackPlugin({
  //     patterns: [
  //       {
  //         from: "process/browser",
  //         to: "browser",
  //       },
  //     ],
  //   })
  // );

  // config.resolve.fallback = { crypto: require.resolve("crypto-browserify") };
  // config.resolve.fallback = { buffer: require.resolve("buffer") };
  // config.resolve.fallback = { stream: require.resolve("stream-browserify") };

  return config;
};
