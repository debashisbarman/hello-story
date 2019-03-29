# hello-story

This is a `Hello, world!` implementation of React Storybook.

**Storybook** is a user interface development environment and playground for UI components.

## Setup

1. Install `@storybook/react`.

```
npm install @storybook/react --save-dev
```

2. Add a `npm` script.

```
{
  "scripts": {
    "storybook": "start-storybook"
  }
}
```

3. Configure Storybook in `.storybook/config.js`.

```
import { configure } from '@storybook/react';

function loadStories() {
  // load stories here...
  require('../src/stories/index');
}

configure(loadStories, module);
```

4. Write stories in `.src/stories/index.js`.

```
import React from 'react';
import { storiesOf } from '@storybook/react';
import HelloWorld from '../components/HelloWorld';

storiesOf('HelloWorld', module)
  .add('with no content', () => <HelloWorld />)
  .add('with content', () => <HelloWorld content="Goodbye, World!" />);
```

5. Run Storybook.

```
npm run storybook
```

This app is bootstrapped with [React Kathamo](https://www.npmjs.com/package/react-kathamo-cli). 😉
