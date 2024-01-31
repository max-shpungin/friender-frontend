import logo from './logo.svg';
import './App.css';
import RoutesList from './RoutesList';
import { BrowserRouter } from 'react-router-dom';
import FrienderAPI from './api';

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
        <RoutesList doSignUp={doSignUp} />
      </BrowserRouter>
    </div>
  );
}

export default App;
