const {merge} = require('webpack-merge')
const commonConfig = require('./webpack.common.js')
const loadPresets = require('./loadPresets')

module.exports = envVars => {
  const {env, presets} = envVars
  const envConfig = require(`./webpack.${env}.js`)
  const config = merge(commonConfig, envConfig, loadPresets({env, presets}))
  return config
}
