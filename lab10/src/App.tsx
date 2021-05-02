import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { Store } from 'redux';

import { ApplicationState } from './store';
import { UserData_t, IError } from './store/UserData/types'
import UserSearch from './Components/UserSearch'
import UserCard from './Components/Card'
import './App.css';

interface MainProps {
  store: Store<ApplicationState>;
}

function App(store: any): any/*React.FC<MainProps>*/ {
  const [name, setName] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [repos, setRepos] = useState<number>(0);
  const [avatar, setAvatar] = useState<string>('');

  // error handler
  const [error, setError] = useState<IError>({msg: ' '});

  
  const setData = (data: UserData_t): any => {
    setAvatar(data.avatar_url);
    setName(data.name);
    setUserName(data.login);
    setRepos(parseInt(data.public_repos, 10));
  }

  function FetchRequest(text: string) {
    console.log("Creating a request: " + text);
    fetch('https://api.github.com/users/' + text)
    .then((result) => result.json())
    .then((data) => {
      if (data.message) {
        setError(data.message);
      } else {
        setError({msg: ''});
        setData({
          name: data.name,
          login: data.login,
          public_repos: data.public_repos,
          avatar_url: data.avatar_url
        });
      }
    })
    .catch((err) => {
      setError({msg: 'no data | ' + err});
    });
  }

  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <p>
            LAB-10 UI5-45 Turchin
          </p>
          <UserSearch MakeRequest={FetchRequest}/>
          {error.msg !== '' ? <div>{error.msg}</div> : <div></div>}
          {(avatar !== undefined && avatar!== '' && avatar.split('/')) ? <UserCard name={name} userName={userName} repos={repos} avatar={avatar}/> : <div></div>} 
        </header>
      </div>
    </Provider>
  );
}

export default App;