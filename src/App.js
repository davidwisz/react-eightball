import React from 'react';
import Eightball from './Eightball';
import './App.css';
import './Eightball.css';

function App() {
  return (
    <div className="App">
      <Eightball color="#000" msg="Think of a question" />
    </div>
  );
}

export default App;
