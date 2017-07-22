import * as React from 'react';
import MenuControl from './private/MenuControl';
import MenuItem from './private/MenuItem';

type PropsT = {
  offset?: number,
  duration?: number
};

type StateT = {
  isOpened: boolean;
};

class FabMenu extends React.Component<PropsT, StateT> {
  constructor() {
    super();
    this.state = {
      isOpened: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const { duration, offset, children } = this.props;
    const _duration = duration || 300;
    const _offset = offset || 80;
    const { isOpened } = this.state;
    const numOfChild = React.Children.count(children);
    const display = React.Children.map(children, (child, index) => {
      const subDuration = isOpened ? numOfChild - index : index + 1;
      const subDelay = !isOpened ? numOfChild - index - 1 : index;
      const inc = _duration / numOfChild;

      return (
        <div style={{ position: 'absolute', top: (index + 1) * _offset, left: 0 }}>
          <MenuItem shrink={isOpened} duration={subDuration * inc} delay={subDelay * inc}>
            {child}
          </MenuItem>
        </div>
      );
    });
    return (
      <div style={{ display: 'inline-block', position: 'relative' }}>
        <MenuControl open={isOpened} onClick={this.handleClick} duration={_duration} />
        {display}
      </div>
    );
  }
  private handleClick() {
    this.setState({ isOpened: !this.state.isOpened });
  }
}

export default FabMenu;