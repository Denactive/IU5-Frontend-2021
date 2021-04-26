import logo from './logo.svg';
import React from 'react'
import UserSearch from './UserSearch'
import './App.css';

function App() {
  function MakeRequest(text) {
    console.log("Creating a request: " + text);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          LAB-9 UI5-45 Turchin
        </p>
        <UserSearch MakeRequest={MakeRequest}/>
      </header>
    </div>
  );
}

export default App;
