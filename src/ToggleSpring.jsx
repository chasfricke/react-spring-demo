import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './App.css';

const Toggle = () => {
  const [isToggled, setToggle] = useState(false);
  const fade = useSpring({
    opacity: isToggled ? 1 : 0,
    fontSize: isToggled ? '3rem' : '2em',
    color: isToggled ? 'tomato' : 'green',
    transform: isToggled ? 'translate3d(0,0,0)' : 'translate3d(0,-50px,0)'
  });

  return (
    <div className="Toggle-container">
      <animated.h2 style={fade}>Here I Am</animated.h2>
      <button onClick={() => setToggle(!isToggled)}>Toggle</button>
    </div>
  );
};

export default Toggle;