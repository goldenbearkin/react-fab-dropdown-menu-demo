import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';

import FabDropDownMenu from '../../FabDropDownMenu';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ThumbUpDown from 'material-ui/svg-icons/action/thumbs-up-down';
import SocialPoll from 'material-ui/svg-icons/social/poll';

storiesOf('FabDropDownMenu', module)
  .addDecorator(withKnobs)
  // .add('testing', () => <h1>testing</h1>)
  .add('default', () => <FabDropDownMenu />)
  // .add('with styles', () => <FabDropDownMenu  backgroundColor={text('backgroundColor', 'black')} />)
  .add('with items', () => {
    const density = number('density', 80);
    const duration = number('duration', 300);
    return (
      <FabDropDownMenu density={density} duration={duration}>
        <FloatingActionButton backgroundColor={'rgb(65, 65, 65)'}>
          <ThumbUpDown />
        </FloatingActionButton>
        <FloatingActionButton backgroundColor={'rgb(248, 167, 36)'}>
          <SocialPoll />
        </FloatingActionButton>
      </FabDropDownMenu>
    );
  });