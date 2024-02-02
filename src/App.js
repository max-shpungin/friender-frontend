import { BrowserRouter } from 'react-router-dom';
import {useState, React} from "react"

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
  const [currUser, setCurrUser] = useState({})

  async function doSignUp(signUpData) {
    await FrienderAPI.register(signUpData);
  }

  /** Logs user in with credentials. Upon successful login,
  *  getUserDetails called to change currUser state
  */
  async function login(loginData) {
    const user = await FrienderAPI.login(loginData);

    localStorage.setItem("user", user.username);

    setCurrUser(() => ({ isLoading: true }));

  }



  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <RoutesList doSignUp={doSignUp} login={login} />
      </BrowserRouter>
    </div>
  );
}

export default App;
