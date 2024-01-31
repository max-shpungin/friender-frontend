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
      <h2> Sign up for a super sweet account. Friend. er.</h2>
      <SignupForm doSignUp={doSignUp}/>
    </div>
  )
}

export default SignupPage;