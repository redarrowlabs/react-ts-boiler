const genDefaultConfig = require('@kadira/storybook/dist/server/config/defaults/webpack.config.js');
const Build = require('../build.config');

module.exports = function (config, env) {
    const storybookDefaults = genDefaultConfig(config, env);

    // storybook provides a JS and CSS loader by default,
    // so exclude our own.
    const storybookLoaders = Object.keys(Build.loaderMap)
        .filter(x => x !== "css")
        .map(x => Build.loaderMap[x]);

    const loaders = storybookDefaults.module.loaders.concat(storybookLoaders);
    const extensions = storybookDefaults.resolve.extensions.concat(['.ts', '.tsx']);

    storybookDefaults.module.loaders = loaders;
    storybookDefaults.resolve.extensions = extensions;

    return storybookDefaults;
}