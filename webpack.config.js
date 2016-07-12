module.exports = {
    entry: './main.js',
    output: {
        filename: "bundle.js",
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }

        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}
