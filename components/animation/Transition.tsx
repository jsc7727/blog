import { css } from '@emotion/react';
import { TransitionGroup, Transition as ReactTransition } from 'react-transition-group';

type TransitionKind<RC> = {
  children: RC;
  location: string;
};

const TIMEOUT = 200;

const getTransitionStyles = {
  entering: css`
    position: absolute;
    opacity: 0;
    transform: translateX(50px);
  `,
  entered: css`
    transition: opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out;
    opacity: 1;
    transform: translateX(0px);
    animation: blink 0.3s linear 2;
  `,
  exiting: css`
    transition: opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out;
    opacity: 0;
    transform: translateX(-50px);
  `,
  exited: css``,
  unmounted: css``,
};

const Transition = ({ children, location }: TransitionKind<React.ReactNode>) => {
  return (
    <TransitionGroup style={{ position: 'relative' }}>
      <ReactTransition
        key={location}
        timeout={{
          enter: TIMEOUT,
          exit: TIMEOUT,
        }}
      >
        {(status) => <div css={getTransitionStyles[status]}>{children}</div>}
      </ReactTransition>
    </TransitionGroup>
  );
};
export default Transition;
