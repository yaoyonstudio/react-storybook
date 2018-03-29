import { configure } from '@storybook/react';
import { configure as configureViewport, INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

console.log(configureViewport)

configureViewport({
  viewports: {
    INITIAL_VIEWPORTS
  },
  defaultViewport: 'iphone6'
});

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
