import FrienderAPI from "./api";
import UserCard from "./UserCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


/** Show all the users on the page with links to profile pages */
function UsersListingPage() {
  const [users, setUsers] = useState([]);

  console.log("users state:", users);

  useEffect(function fetchAllUsersOnMount() {
    async function fetchAllUsers() {
      try {
        const fetchedUsers = await FrienderAPI.getAllUsers();
        console.log("fetchedUsers", fetchedUsers);
        console.log("fetchedUsers.users", fetchedUsers.users);
        setUsers(fetchedUsers.users);
      } catch (err) {
        console.error(err);
      }
    }
    fetchAllUsers();
  }, []);

  // map over the users.users and spit them out on UserCards




  return (
    <div className="UsersListingPage">
      {console.log("users in the return userslisting page:", users)}


      {users.map(u => (
        <UserCard userDetails={u} key={u.username} />))}

      These are all the folks you can chat with
    </div>
  );
}

export default UsersListingPage;



