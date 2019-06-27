import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import '../App.css';

const BallShadow = () => {
  const { s } = useSpring({
    from: {s: 0.1},
    to: {s: 1},
    delay: 500,
    config: config.slow,
  });

  const { o } = useSpring({
    from: {o: 0},
    to: {o: 0.75},
    duration: 2000,
    config: config.molasses
  });



  return (
    <div className="Ball-shadow-container">
      <animated.div 
        style={{
          transform: s.interpolate(s => `scale(${s}, ${s}`),
          opacity: o.interpolate(o => `${o}`)
        }} 
      className='Ball-shadow'/>
    </div>
  );
};

export default BallShadow;
