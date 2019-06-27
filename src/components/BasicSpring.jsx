import React from 'react';
import { useSpring, animated } from 'react-spring';
import '../App.css';

const AppTitle = () => {
  const fade = useSpring({
    from: {
      opacity: 0
    },
    opacity: 1,
    delay: 1000,
  });

  return (
    <div>
      <p>Basic Spring</p>
        <animated.h1 style={fade}>Hello</animated.h1>
    </div>
  );
};

export default AppTitle;