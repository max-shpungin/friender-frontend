import logo from './logo.svg';
import './App.css';
import RoutesList from './RoutesList';
import { BrowserRouter } from 'react-router-dom';

/**
 * Props:
 *  - None
 *
 * State:
 *  - None
 *
 * Functions:
 *  - None
 *
 * App -> RoutesList -> Home, UserListings, User Profile, Signup Page
 */

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RoutesList />
      </BrowserRouter>

    </div>
  );
}

export default App;
