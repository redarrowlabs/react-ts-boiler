const genDefaultConfig = require('@kadira/storybook/dist/server/config/defaults/webpack.config.js');
const Build = require('../build.config');

module.exports = function(config, env){
    const storybookDefaults = genDefaultConfig(config, env);

    const loaders = storybookDefaults.module.loaders.concat(Build.loaders);
    const extensions = storybookDefaults.resolve.extensions.concat(['.ts', '.tsx']);

    storybookDefaults.module.loaders = loaders;
    storybookDefaults.resolve.extensions = extensions; 

    return storybookDefaults;
}