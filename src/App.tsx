import * as React from 'react';
import './App.css';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ThumbUpDown from 'material-ui/svg-icons/action/thumbs-up-down';
import SocialPoll from 'material-ui/svg-icons/social/poll';
import FabDropDownMenu from './FabDropDownMenu/FabDropDownMenu';

const logo = require('./logo.svg');

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <FabDropDownMenu>
          <FloatingActionButton backgroundColor={'rgb(65, 65, 65)'}>
            <ThumbUpDown />
          </FloatingActionButton>
          <FloatingActionButton backgroundColor={'rgb(248, 167, 36)'}>
            <SocialPoll />
          </FloatingActionButton>
          <FloatingActionButton backgroundColor={'rgb(119, 143, 155)'}>
            <ThumbUpDown />
          </FloatingActionButton>
          <FloatingActionButton backgroundColor={'rgb(0, 171, 192)'}>
            <SocialPoll />
          </FloatingActionButton>
          <FloatingActionButton backgroundColor={'rgb(29, 135, 228)'}>
            <ThumbUpDown />
          </FloatingActionButton>
          <FloatingActionButton backgroundColor={'rgb(55, 141, 59)'}>
            <SocialPoll />
          </FloatingActionButton>
          <FloatingActionButton backgroundColor={'rgb(229, 57, 53)'}>
            <ThumbUpDown />
          </FloatingActionButton>
          <FloatingActionButton backgroundColor={'rgb(169, 0, 255)'}>
            <SocialPoll />
          </FloatingActionButton>
        </FabDropDownMenu>
      </div>
    );
  }
}

export default App;
