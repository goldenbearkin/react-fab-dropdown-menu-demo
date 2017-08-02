import * as React from 'react';
import MenuControl from './private/MenuControl';
import MenuItem from './private/MenuItem';

type PropsT = {
  density?: number,
  duration?: number
};

type StateT = {
  isOpened: boolean;
};

class FabMenu extends React.PureComponent<PropsT, StateT> {
  static defaultProps: Partial<PropsT> = {
    density: 80,
    duration: 300
  };

  constructor() {
    super();
    this.state = { isOpened: false };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const { duration, density, children } = this.props;
    const { isOpened } = this.state;

    const numOfChild = React.Children.count(children);
    const display = React.Children.map(children, (child, index) => {
      const subDuration = isOpened ? numOfChild - index : index + 1;
      const subDelay = !isOpened ? numOfChild - index - 1 : index;
      const inc = duration! / numOfChild;

      return (
        <div style={{ position: 'absolute', top: (index + 1) * density!, left: 0 }}>
          <MenuItem shrink={isOpened} duration={subDuration * inc} delay={subDelay * inc}>
            {child}
          </MenuItem>
        </div>
      );
    });
    return (
      <div style={{ display: 'inline-block', position: 'relative' }}>
        <MenuControl open={isOpened} onClick={this.handleClick} duration={duration!} />
        {display}
      </div>
    );
  }
  private handleClick() {
    this.setState({ isOpened: !this.state.isOpened });
  }
}

export default FabMenu;