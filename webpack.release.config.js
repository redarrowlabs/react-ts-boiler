const webpack = require("webpack");
const path = require('path');
const DashPlugin = require('webpack-dashboard/plugin');

const entry = [
    "./src/index.tsx",
];

const outputPath = path
        .join(__dirname, 'dist')
        //Windows bug in node regarding file casing
        //causes incorrect warnings.
        //https://github.com/webpack/webpack/issues/2362
        .replace(/^([A-Z]:)/, v => v.toUpperCase())

console.log(outputPath)

const output = {
    path: outputPath,
    filename: "bundle.js",
    publicPath: "/static/",
}

const typescript = {
    test: /\.tsx?$/,
    loaders: [
        "ts-loader"
    ],
}

module.exports = {
    entry,
    output,

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js"]
    },

    plugins: [
    ],

    module: {
        loaders: [typescript]
    }
};