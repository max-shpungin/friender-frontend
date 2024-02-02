import { BrowserRouter } from 'react-router-dom';


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

  async function doSignUp(signUpData){
    await FrienderAPI.register(signUpData);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <RoutesList doSignUp={doSignUp} />
      </BrowserRouter>
    </div>
  );
}

export default App;
