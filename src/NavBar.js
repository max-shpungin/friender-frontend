import { NavLink } from 'react-router-dom';

function NavBar() {

  return (
    <div className='navbar NavBar bg-primary-subtle'>
      <div className='container-fluid'>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <NavLink className="navbar-brand" to="/">AOL Chat</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className="nav-link" to="/users">Who's In the Party?</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className="nav-link" to="/chatroom">Head to the party. Dude. Wow.</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;