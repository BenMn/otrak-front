/* eslint-disable react/prop-types */

import React from 'react';
import { useSpring, animated } from 'react-spring';


const Fade = React.forwardRef((props, ref) => {
  const {
    in: open, children, onEnter, onExited, ...other
  } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

export default Fade;
