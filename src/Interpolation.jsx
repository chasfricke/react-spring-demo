import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const IntToggle = () => {
  const [isToggled, setToggle] = useState(false);
  const { color, opacity, x } = useSpring({
    opacity: isToggled ? 0 : 1,
    color: isToggled ? 'tomato' : 'green',
    x: isToggled ? 0 : -50
  });

  return (
    <div>
      <animated.h1
        style={{
          transform: x.interpolate(x => `translate3d(${x}px, 0, 0)`),
          color,
          opacity
        }}
      >
        Goodbye
      </animated.h1>
      <button onClick={() => setToggle(!isToggled)}>Toggle</button>
    </div>
  );
};

// const AnimatedTitle = animated(componentName);

export default IntToggle;