const webpack = require("webpack");
const path = require('path');
const DashPlugin = require('webpack-dashboard/plugin');
const Build = require('./build.config');

const entry = [
    "./src/index.tsx",
];

const output = {
    path: Build.outputPath,
    filename: "bundle.js",
    publicPath: "/static/",
}

const uglify = new webpack.optimize.UglifyJsPlugin({ sourceMap: true });
const dedupe = new webpack.optimize.DedupePlugin();

module.exports = {
    entry,
    output,

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js"]
    },
    plugins: [ uglify, dedupe ],
    module: { loaders: Build.loaders }
};
