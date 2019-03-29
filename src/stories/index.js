import React from 'react';
import { storiesOf } from '@storybook/react';
import HelloWorld from '../components/HelloWorld';

storiesOf('HelloWorld', module)
  // HelloWorld without prop
  .add('with no content', () => <HelloWorld />)
  // HelloWorld with prop
  .add('with content', () => <HelloWorld content="Goodbye, World!" />);
