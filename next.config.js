const WindiCSS = require('windicss-webpack-plugin')

module.exports = {
  webpack(config) {
    config.plugins.push(new WindiCSS())
    return config
  },
}
