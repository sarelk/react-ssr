const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')
const webpackNodeExternals = require('webpack-node-externals')

const config = {
    // Inform webpack that w'ere building a bundle for node
    target: 'node',

    // Tell webpack the root file of our server app
    entry: './src/index.js',

    // Where to put the output file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    externals: [webpackNodeExternals()]
}

module.exports = merge(baseConfig, config)