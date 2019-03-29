import { configure } from '@storybook/react';

function loadStories() {
  // load stories here...
  require('../src/stories/index');
}

configure(loadStories, module);
