const path = require('path');
const dotenv = require('dotenv');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'test') {
    dotenv.config({ path: '.env.test' });
} else if (process.env.NODE_ENV === 'development') {
    dotenv.config({ path: '.env.development' });
}

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
            new webpack.DefinePlugin({
                'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
                'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
                'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
                'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
                'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
                'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
                'process.env.FIREBASE_APP_ID': JSON.stringify(process.env.FIREBASE_APP_ID),
                'process.env.FIREBASE_MEASUREMENT_ID': JSON.stringify(process.env.FIREBASE_MEASUREMENT_ID),
            }),
        ],
        resolve: {
            extensions: ['.js', '.jsx', '.scss', '.css'],
        },
        devtool: isProduction ? 'source-map' : 'inline-source-map',
    };
};
