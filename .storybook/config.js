import { configure } from '@kadira/storybook';

function loadStories() {
    require('../src/introduction/intro.story.tsx');
    // require as many stories as you need.
}

configure(loadStories, module);
