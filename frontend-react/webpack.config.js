const path = require('path');

module.exports = {
    context: __dirname,

    entry: 'src/index.js',
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'bundle.js'
    },
    devServer : {
        static: path.resolve(__dirname, './public')
    },
    rules: [
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel-presets', '@babel-react']
                },
            },
        },
        {
            test: /\.css$/,
            use: ['css-loader', 'style-loader'],
        }
    ],
    resolve: {
        extensions: ['jsx', 'js', '*']
    },
};