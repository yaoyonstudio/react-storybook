import { configure } from '@storybook/react';
import { configure as configureViewport } from '@storybook/addon-viewport';

configureViewport({
  defaultViewport: 'iphone6p'
});

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
