// Merge the 'common-config' with 'dev-config' or with 'prod-config'.

const commonConfig = require('./build-utils/webpack.common');
const webpackMerge = require('webpack-merge');

module.exports = env => {
  console.log(env);

  const envConfig = require(`./build-utils/webpack.${env.env}.js`);

  return webpackMerge(commonConfig, envConfig);
};
