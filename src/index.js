import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';

ReactDOM.render(
  <div>This is a Hello, world! implementation of React Storybook.</div>,
  document.getElementById('root'),
);

if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
