import * as React from 'react';
import Transition from 'react-transition-group/Transition';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import ContentClear from 'material-ui/svg-icons/content/clear';

const TRANSITION_STYLE = {
  entering: { transform: `rotate(360deg)` },
  entered: { transform: `rotate(360deg)` },
  exiting: { transform: `rotate(-360deg)` },
  exited: { transform: `rotate(-360deg)` }
};

type PropsT = {
  open?: boolean;
  duration?: number;
  onClick?: React.MouseEventHandler<void>;
  backgroundColor?: string;
};

class MenuControl extends React.PureComponent<PropsT> {
  static defaultProps: Partial<PropsT> = {
    open: false,
    duration: 300,
    backgroundColor: 'rgb(0, 188, 212)'
  };

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const { open, duration, backgroundColor } = this.props;
    const defaultStyle: React.CSSProperties = {
      transition: `transform ${duration}ms ease-in-out`,
      transform: `rotate(0deg)`
    };
    const display = (state: string) => {
      let action: JSX.Element | null;
      switch (state) {
        case 'exited':
          action = <NavigationMenu />;
          break;
        case 'entering':
          action = <NavigationMenu style={{ ...defaultStyle, ...TRANSITION_STYLE[state] }} />;
          break;
        case 'entered':
          action = <ContentClear />;
          break;
        case 'exiting':
          action = <ContentClear style={{ ...defaultStyle, ...TRANSITION_STYLE[state] }} />;
          break;
        default:
          action = null;
          break;
      }
      return (
        <FloatingActionButton onClick={this.handleClick} backgroundColor={backgroundColor}>
           {action} 
        </FloatingActionButton>
      );
    };
    return (
      <Transition in={open!} timeout={duration!}>
        {display}
      </Transition>
    );
  }

  handleClick(e: React.MouseEvent<void>) {
    const clickHandler = this.props.onClick;
    if (clickHandler) {
      clickHandler(e);
    }
  }
}

export default MenuControl;