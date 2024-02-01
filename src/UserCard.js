import {Link} from "react-router-dom"

/** Displays user image, username, hobbies, and link to their profile page
 *
 * Props:
 * - userDetails: object of user details
 *
 * State:
 * - None
 */

function UserCard({userDetails}){

  const username =  userDetails.username

  return (
    <div className="UserCard" key={userDetails.username}>
      <img src={userDetails.photo_url}></img>
      <Link to={`/users/${username}`}> {userDetails.username} </Link>
      <p>{userDetails.hobbies}</p>
    </div>
  )
}

export default UserCard;

