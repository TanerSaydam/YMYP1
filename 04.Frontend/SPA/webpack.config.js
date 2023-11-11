const path = require("path");
const HtmlWebpacPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: "./src/main.ts",
    mode: "development",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: ['.tsx','.ts','.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    devServer: {
        historyApiFallback: true,
        static: [
            { directory: path.join(__dirname, 'public'), publicPath: '/', serveIndex: true},
            { directory: path.join(__dirname,'src'), publicPath: '/'}
        ]
    },
    plugins: [
        new HtmlWebpacPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'public', to: 'dist'
                }
            ]
        })
    ]
}