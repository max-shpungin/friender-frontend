import { Route, Routes, Navigate, useParams } from "react-router-dom";
import SignupPage from "./SignupPage";
import ProfilePage from "./ProfilePage";
import UsersListingPage from "./UsersListingPage"
import Home from "./Home";
import Chatroom from "./Chatroom";

/**
 * Props:
 *  - doSignUp f(x), login f(x), username (current user: username)
 *
 * State:
 *  - None
 *
 * Functions:
 *  - None
 *
 * App -> RoutesList -> Home, UserListings, User Profile, Signup Page
 */

function RoutesList({ doSignUp, login, user }) {

  return (
    <div className="RoutesList">
      <Routes>
        <Route element={<SignupPage doSignUp={doSignUp} login={login}/>} path="/signup" />
        <Route element={<ProfilePage />} path="/users/:username" />
        <Route element={<UsersListingPage />} path="/users" />
        <Route element={<Home login={login} />} path="/" />
        <Route element={<Chatroom user={user} />} path="/chatroom" />
      </Routes>

    </div>
  );
}

export default RoutesList;