import React from 'react';
import './App.css';
import AppTitle from './components/BasicSpring.jsx';
import Toggle from './components/ToggleSpring.jsx';
import IntToggle from './components/Interpolation.jsx';
import UseTransition from './components/UseTransition.jsx';

const App = () => {

  return (
    <div className="App" >
      <AppTitle />
      <Toggle />
      <IntToggle />
      <UseTransition />
    </div>
  );
};

export default App;
