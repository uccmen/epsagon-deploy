import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { join, resolve } from 'path';
import slsw from 'serverless-webpack';
module.exports = {
    mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
    entry: slsw.lib.entries,
    resolve: {
        extensions: ['.js', '.json', '.ts'],
        modules: [resolve(__dirname), 'node_modules'],
    },
    output: {
        libraryTarget: 'commonjs',
        path: join(__dirname, '.webpack'),
        filename: '[name].js',
    },
    target: 'node',
    module: {
        rules: [
            {
                test: /\.hbs$/,
                loader: 'handlebars-loader',
                options: {
                    helperDirs: [join(__dirname, './src/ui/hbs-helper')],
                },
            },
            {
                test: /\.ts(x?)$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    transpileOnly: true,
                },
            },
        ],
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin({
            tsconfig: './tsconfig.json',
            tslint: './tslint.json',
        }),
    ],
};
//# sourceMappingURL=webpack.config.js.map