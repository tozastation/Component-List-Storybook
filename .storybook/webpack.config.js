// const path = require('path');
// module.exports = (baseConfig, env, config) => {
//   config.module.rules.push({
//     test: /\.(ts|tsx)$/,
//     use: [{
//       loader: require.resolve('awesome-typescript-loader')
//     // }, {
//     //   loader: require.resolve('react-docgen-typescript-loader')
//     // }
//     }]
//   });
//   config.resolve.extensions.push('.ts', '.tsx');
//   return config;
// };

const TSDocgenPlugin = require('react-docgen-typescript-webpack-plugin')

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('awesome-typescript-loader'),
  })

  defaultConfig.module.rules.push({
    test: /\.stories\.tsx?$/,
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    enforce: 'pre',
  });

  defaultConfig.plugins.push(new TSDocgenPlugin())
  defaultConfig.resolve.extensions.push('.ts', '.tsx')
  return defaultConfig
}