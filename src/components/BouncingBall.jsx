import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import '../App.css';

const BouncingBall = () => {
  const { y, deg } = useSpring({
    from: {y: -200, deg: 0},
    to: {y: 450, deg: 90},
    delay: 500,
    config: config.slow,
  });

  return (
    <div className="Bouncing-ball-container">
      <animated.div 
        style={{
          transform: y.interpolate(y => `translate3d(0, ${y}px, 0) rotate(${y}deg)`)
        }} 
      className='Bouncing-ball'>:)</animated.div>
    </div>
  );
};

export default BouncingBall;