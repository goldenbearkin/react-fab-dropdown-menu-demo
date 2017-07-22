import * as React from 'react';
import Transition from 'react-transition-group/Transition';

const TransitionStyles = {
  entering: { transform: `scale(1)` },
  entered: { transform: `scale(1)` },
  exiting: { transform: `scale(0)` },
  exitied: { transform: `scale(0)` }
};

type PropsT = {
  shrink: boolean;
  duration: number;
  delay: number;
};

class MenuItem extends React.PureComponent<PropsT> {
  render() {
    const { shrink, delay, duration, children } = this.props;
    const defaultStyle = {
      transition: `transform ${duration}ms linear ${delay}ms`,
      transform: `scale(0)`,
    };
    const display = (state: string) => {
      return (
        <div style={{ ...defaultStyle, ...TransitionStyles[state] }}>
          {children}
        </div>
      );
    };
    return (
      <Transition in={shrink} timeout={duration}>
        {display}
      </Transition>
    );
  }
}

export default MenuItem;