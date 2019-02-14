const TSDocgenPlugin = require('react-docgen-typescript-webpack-plugin')

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('awesome-typescript-loader'),
  })
  
  defaultConfig.module.rules.push({
    test: /\.stories\.tsx?$/,
    loaders: [
        {
            loader: require.resolve("@storybook/addon-storysource/loader"),
            options: { parser: "typescript" }
        }
    ],
    enforce: "pre"
  });
    
  defaultConfig.plugins.push(new TSDocgenPlugin())
  defaultConfig.resolve.extensions.push('.ts', '.tsx')
    return defaultConfig
}