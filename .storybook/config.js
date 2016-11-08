import { configure } from '@kadira/storybook';

const requireContext = require.context('../src', true, /.story.tsx$/);

function loadStories() {
    require('../src/styles');
    requireContext.keys().forEach(filename => requireContext(filename));
}

configure(loadStories, module);
