const path = require( 'path' );
const webpack = require( 'webpack' );

module.exports = ( env, options ) => {
    return {
        entry: './src/app.js',

        output: {
            path: path.resolve( __dirname, 'out' ),
            filename: 'bundle.js',
        },

        module: {
            rules: [
                {
                    test: /\.jsx$|\.es6$|\.js$/,
                    use: 'babel-loader',
                    exclude: /(node_modules|bower_components)/
                },
                {
                    test: /\.css$/,
                    loader:[ 'style-loader', 'css-loader' ]
                }
            ]
        },

        watch: true,
        devtool: "source-map"
    }
};

