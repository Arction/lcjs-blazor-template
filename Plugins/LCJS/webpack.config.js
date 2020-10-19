const path = require("path");

module.exports = {
    entry: './src/lcjs_blazor_wrapper.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, '../../wwwroot/js'),
        filename: "lcjs_blazor.js",
        library: "LCJSBlazor"
    }
};