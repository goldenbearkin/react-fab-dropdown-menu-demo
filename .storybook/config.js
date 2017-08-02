/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

addDecorator(story => (
  <MuiThemeProvider>
    <div style={{ textAlign: 'center' }}>
      {story()}
    </div>
  </MuiThemeProvider>
));

const req = require.context('../src/FabDropDownMenu', true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
