import { NavLink } from 'react-router-dom';

function NavBar(){

  return(
    <div className='NavBar'>
      <NavLink to="/users">Who's In the Party?</NavLink>
      
    </div>
  )
}

export default NavBar;