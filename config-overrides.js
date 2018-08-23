const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
const rewireSass = require('react-app-rewire-scss');

module.exports = function override(config, env) {
  // do stuff with the webpack config...
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
    config );
    config = rewireLess.withLoaderOptions({
      modifyVars: { "@primary-color": "#6CB1EE",
      "@heading-color": "#283F54",              // heading text color
      "@text-color": "#283F54",
     },
      javascriptEnabled: true})(config, env);

    config = rewireSass(config, env);

  return config;
};
