import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import GreetingWidget from '../widget/GreetingWidget';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to the Learning Java Frontend!
        </p>
     
      </header>
      <main>
        <GreetingWidget/>
      </main>
    </div>
  );
}

export default App;
