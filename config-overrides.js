const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
  // do stuff with the webpack config...
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
    config );
    config = rewireLess.withLoaderOptions({
      modifyVars: { "@primary-color": "#6CB1EE",
      "@heading-color": "rgba(0, 0, 0, .85)",              // heading text color
  "@text-color": "#9EA59C"      },
      javascriptEnabled: true})(config, env);
  return config;
};
