const path = require('path')

module.exports = {
    // Tell webpack the root file of our server app
    entry: './src/client/client.js',

    // Where to put the output file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },

    // tell webpack to run babel on every file
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env', {targets: {browsers: ['last 2 versions']}}]
                    ]
                }
            }
        ]
    }
}