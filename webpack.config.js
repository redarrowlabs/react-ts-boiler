const webpack = require("webpack");
const DashPlugin = require('webpack-dashboard/plugin');
const Build = require('./build.config');

const entry = [
    "react-hot-loader/patch",
    "webpack-dev-server/client?http://localhost:8080",
    "webpack/hot/only-dev-server",
    "./src/index.tsx",
];

const output = {
    path: Build.outputPath,
    filename: "bundle.js",
    publicPath: "/static/",
}

module.exports = {
    entry,
    output,

    // Enable sourcemaps for debugging webpack's output.
    // Don't change this to eval-source-map -- uncaught errors
    // have no call stack when evaled
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js"]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new DashPlugin({ port: 3001 })
    ],
    module: { loaders: Build.loaders }
};
