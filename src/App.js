import logo from './logo.svg';
import './App.css';
import RoutesList from './RoutesList';

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
      <RoutesList/>
    </div>
  );
}

export default App;
