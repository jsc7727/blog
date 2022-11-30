import { SerializedStyles } from '@emotion/react';
import { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

type LayoutCSSTransitionPropsType = {
  observe?: string;
  children: React.ReactNode;
  css: SerializedStyles;
};

const LayoutCSSTransition = ({ observe, css, children }: LayoutCSSTransitionPropsType) => {
  const [inProp, setInProp] = useState(false);
  useEffect(() => {
    setInProp((prop) => !prop);
  }, [observe]);
  const nodeRef = useRef(null);
  return (
    <div css={css}>
      <CSSTransition nodeRef={nodeRef} in={inProp} timeout={3000} classNames="my-node">
        <div ref={nodeRef}>{children}</div>
      </CSSTransition>
    </div>
  );
};
export default LayoutCSSTransition;
