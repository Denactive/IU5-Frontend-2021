import React, { useState } from 'react'
import UserSearch from './Components/UserSearch'
import UserCard from './Components/Card'
import './App.css';

function App() {
  interface IError {
    msg: string;
  }
  interface IName {
    name: string;
  }
  interface IUsername {
    login: string;
  }
  interface IRepos {
    amount: number;
  }
  interface IAvatar {
    url: string;
  }

  // const [name, setName] = useState<IName>({name: ''});
  // const [userName, setUserName] = useState<IUsername>({login: ''});
  // const [repos, setRepos] = useState<IRepos>({amount: 0});
  // const [avatar, setAvatar] = useState<IAvatar>({url: ''});
  const [name, setName] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [repos, setRepos] = useState<number>(0);
  const [avatar, setAvatar] = useState<string>('');

  // error handler
  const [error, setError] = useState<IError>({msg: ' '});



  type UserData_t = {
    name: string,
    login: string,
    public_repos: string,
    avatar_url: string
  }
  
  // type setDataType (name: string, login: string, public_repos: number, avatar_url:string) => void;
  const setData = (data: UserData_t): any => {
    // setAvatar({url: data.avatar_url});
    // setName({name: data.name});
    // setUserName({login: data.login});
    // setRepos({amount: parseInt(data.public_repos, 10)});
    setAvatar(data.avatar_url);
    setName(data.name);
    setUserName(data.login);
    setRepos(parseInt(data.public_repos, 10));
  }

  function MakeRequest(text: string) {
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
    <div className="App">
      <header className="App-header">
        <p>
          LAB-9 UI5-45 Turchin
        </p>
        <UserSearch MakeRequest={MakeRequest}/>
        {error.msg !== '' ? <div>{error.msg}</div> : <div></div>}
        {(avatar !== undefined && avatar!== '' && avatar.split('/')) ? <UserCard name={name} userName={userName} repos={repos} avatar={avatar}/> : <div></div>} 
      </header>
    </div>
  );
}

export default App;