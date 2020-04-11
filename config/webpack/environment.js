const { environment } = require('@rails/webpacker')
const images = require.context('../../assets/images', true)
const webpack = require("webpack") 
environment.plugins.append("Provide", new webpack.ProvidePlugin({
$: 'jquery',
jQuery: 'jquery',
Popper: ['popper.js', 'default']
}))

module.exports = environment
