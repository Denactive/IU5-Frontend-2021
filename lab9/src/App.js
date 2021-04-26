import React, { useEffect, useState } from 'react'
import UserSearch from './Components/UserSearch'
import UserCard from './Components/Card'
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [repos, setRepos] = useState('');
  const [avatar, setAvatar] = useState('');

  // TODO: error handler
  const [error, setError] = useState('');


  const setData = function ({name, login, public_repos, avatar_url}) {
    setAvatar(avatar_url);
    setName(name);
    setUserName(login);
    setRepos(public_repos);
  }

  function MakeRequest(text) {
    console.log("Creating a request: " + text);
    fetch('https://api.github.com/users/' + text)
    .then((result) => result.json())
    .then((data) => {
      if (data.message) {
        setError(data.message);
      } else {
        setError('');
        setData(data);
      }
    })
    .catch((err) => {
      error = 'no data | ' + err;
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          LAB-9 UI5-45 Turchin
        </p>
        <UserSearch MakeRequest={MakeRequest}/>
        {error !== '' ? <div>{error}</div> : <div></div>}
        {(avatar !== undefined && avatar !== '' && avatar.trim('/')) ? <UserCard name={name} userName={userName} repos={repos} avatar={avatar}/> : <div></div>} 
      </header>
    </div>
  );
}

export default App;
