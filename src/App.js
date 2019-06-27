import React from 'react';
import './App.css';
import AppTitle from './BasicSpring.jsx';
import Toggle from './ToggleSpring.jsx';
import IntToggle from './Interpolation.jsx';

const App = () => {

  return (
    <div className="App" >
      <header className="App-header">
       <AppTitle />
      </header>
      <Toggle />
      <IntToggle />
    </div>
  );
};

export default App;
