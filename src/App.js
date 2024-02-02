import { BrowserRouter } from 'react-router-dom';
import {useState, React, useEffect} from "react"

import './App.css';
import RoutesList from './RoutesList';
import FrienderAPI from './api';
import NavBar from './NavBar';

/**
 * Props:
 *  - None
 *
 * State:
 *  - ////
 *
 * Functions:
 *  - doSignUp
 *
 * App -> RoutesList -> Home, UserListings, User Profile, Signup Page
 */

function App() {
  const [currUser, setCurrUser] = useState(false)

  console.log("APP currUser", currUser);

  async function doSignUp(signUpData) {
    await FrienderAPI.register(signUpData);
  }

  /** Logs user in with credentials. Upon successful login,
  *  getUserDetails called to change currUser state
  */
  async function login(loginData) {
    const user = await FrienderAPI.login(loginData);

    //API response currently coming back as {user: {username:...}}
    localStorage.setItem("user", user.user.username);

    //setCurrUser((currUser) => (user.user));
  }

  useEffect(function getAndSetUserFromStorage(){
    function getUser(){
      const user = localStorage.getItem('user');
      setCurrUser(currUser=>({user:user}));
    }
    if(!currUser){
      getUser();
    }
  },[currUser]);



  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <RoutesList doSignUp={doSignUp} login={login} user={currUser} />
      </BrowserRouter>
    </div>
  );
}

export default App;
