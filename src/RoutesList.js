import { Route, Routes, Navigate, useParams } from "react-router-dom";
import SignupPage from "./SignupPage";
import ProfilePage from "./ProfilePage";
import UsersListingPage from "./UsersListingPage"

/**
 * Props:
 *  - doSignUp f(x)
 *
 * State:
 *  - None
 *
 * Functions:
 *  - None
 *
 * App -> RoutesList -> Home, UserListings, User Profile, Signup Page
 */

function RoutesList({ doSignUp }) {


  return (
    <div className="RoutesList">
      <Routes>
        <Route element={<SignupPage doSignUp={doSignUp} />} path="/signup" />
        <Route element={<ProfilePage />} path="/users/:username" />
        <Route element={<UsersListingPage />} path="/users" />
      </Routes>

    </div>
  );
}

export default RoutesList;