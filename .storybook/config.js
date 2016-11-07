import { configure } from '@kadira/storybook';

const requireContext = require.context('../src', true, /.story.tsx$/);

function loadStories() {
    requireContext.keys().forEach(filename => requireContext(filename));
}

configure(loadStories, module);
