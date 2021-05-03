import React from 'react-redux'
import { UserSearch } from './Components/UserSearch'
import { UserCard } from './Components/Card'
import './App.css';

function App() {
  return (
    <div className="App">
        <p>
          LAB-10-redux UI5-45 Turchin
        </p>
        <UserSearch/>
    </div>
  );
}

export default App;
