const path = require('path');

const outputPath = path
        .join(__dirname, 'dist')
        //Windows bug in node regarding file casing
        //causes incorrect warnings.
        //https://github.com/webpack/webpack/issues/2362
        .replace(/^([A-Z]:)/, v => v.toUpperCase())

const typescript = {
    test: /\.tsx?$/,
    loaders: ['babel', 'ts-loader'],
}

const css = {
    test: /\.css$/,
    loaders: ['style', 'css']
}

const sass = {
    test: /\.scss$/,
    loaders: ['style', 'css', 'sass']
}

const gif = {
    test: /\.gif$/,
    loader: 'url-loader?mimetype=image/png'
}

const woff = {
     test: /\.woff(2)?(\?v=[0-9].[0-9].[0-9])?$/, 
     loader: 'url-loader?mimetype=application/font-woff'
}

const ttf = {
    test: /\.(ttf|eot|svg)(\?v=[0-9].[0-9].[0-9])?$/, 
    loader: 'url-loader'
}

const loaderMap = {
    "typescript": typescript,
    "sass": sass,
    "css": css,
    "gif": gif,
    "woff": woff,
    "ttf": ttf
}

module.exports = {
    loaders: Object.keys(loaderMap).map(x => loaderMap[x]),
    loaderMap,
    outputPath
}