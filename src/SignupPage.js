import SignupForm from "./SignupForm";

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
 * App -> RoutesList -> Signup Page -> Signup Form
 */

function SignupPage({doSignUp}){

  return (
    <div className="SignupPage">
      <SignupForm doSignUp={doSignUp}/>
    </div>
  )
}

export default SignupPage;