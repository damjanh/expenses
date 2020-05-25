const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
    const isProduction = env === 'production';
    return {
        entry: './src/app.jsx',
        output: {
            publicPath: '/',
            path: path.join(__dirname, '/dist'),
            filename: 'bundle_app.js',
        },
        devServer: {
            inline: true,
            port: 8001,
            historyApiFallback: true,
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                {
                                    plugins: [
                                        '@babel/plugin-proposal-class-properties',
                                    ],
                                },
                            ],
                        },
                    },
                },
                {
                    test: /\.s?css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                            },
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                            },
                        },
                    ],
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './index.html',
            }),
            new MiniCssExtractPlugin(),
        ],
        resolve: {
            extensions: ['.js', '.jsx', '.scss', '.css'],
        },
        devtool: isProduction ? 'source-map' : 'inline-source-map',
    };
};
