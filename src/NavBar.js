import { NavLink } from 'react-router-dom';

function NavBar() {

  return (
    <div className='navbar navbar-expand-sm navbar-light bg-primary mb-4 rounded'>
      <div className='container-fluid'>
        <ul className='navbar-nav me-auto mb-2 mb-md-0'>

            <NavLink className="navbar-brand text-white" to="/">AOL Chat</NavLink>

          <li className='nav-item '>
            <NavLink className="nav-link text-white" to="/users">Who's In the Party?</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className="nav-link text-white" to="/chatroom">Head to the party. Dude. Wow.</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;