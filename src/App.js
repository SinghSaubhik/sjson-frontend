import React, { useState } from 'react';
import './App.css';

import Home from './containers/home/home.container';
import Headers from './components/headers/headers.component';
import Toast from './components/toast/toast.component';

const App = (props) => {

  let toastProperty = null;

  const [darkMode, toggleDarkMode] = useState(false);
  const [isShown, toggleShown] = useState(false);

  const onDarkModeToggle = () => {
    toggleDarkMode(!darkMode);
  };


  return (
    <div className={`App ${darkMode ? "dark-mode" : "light-mode"}`}>

      <Headers darkMode={darkMode} toggle={onDarkModeToggle} />
      <div className="App__toast" hidden={!isShown}>
        <Toast property={toastProperty} close={() => toggleShown(false)} />
      </div>
      <Home />
    </div>
  );
};
export default App;
