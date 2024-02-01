import { Route, Routes, Navigate } from "react-router-dom";
import SignupPage from "./SignupPage"
import ProfilePage from "./ProfilePage";

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

function RoutesList({doSignUp}){
  return (
    <div className="RoutesList">
      <Routes>
        <Route element={<SignupPage doSignUp={doSignUp} />} path="/signup"/>
        <Route element={<ProfilePage />} path="/test"/>
      </Routes>

    </div>
  )
}

export default RoutesList;