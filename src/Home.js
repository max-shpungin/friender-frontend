import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import Chatroom from "./Chatroom";
import ErrorMessages from "./ErrorMessages";

/** Shows login form
 *
 * Props:
 * - login(): function to be called in parent
*/

function Home({ login }) {

  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState([]);


  /** Updates form input based on login data */
  function handleChange(evt) {
    let { name, value } = evt.target;
    setLoginData(fData => ({
      ...fData,
      [name]: value,
    })
    );
  };

  /** Clears form upon successful login, redirect to the chatroom
   * Upon failed login, display errors on page
   */
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await login(loginData);
      setLoginData({
        username: '',
        password: ''
      });
      navigate('/chatroom');
    } catch (err) {
      setErrors(err);
    }
  };

  return (
    <div className="container bg">
      <div className="form-signin w-50 m-auto bg-light rounded">
        <form className="LoginForm" onSubmit={handleSubmit}>
          <h1 className="h3 mb-3 fw-normal"> Sign in to chat!</h1>

          <div className="form-floating m-2">
            <label for="floating-input">Username</label>
            <input
              id="floating-input"
              className="form-control"
              value={loginData.username}
              name="username"
              onChange={handleChange} />
          </div>
          <div className="form-floating m-2">
            <label for="floating-input">Password </label>
            <input
              id="floating-input"
              className="form-control"
              value={loginData.password}
              name="password"
              type="password"
              onChange={handleChange} />
          </div>
          <button className="btn btn-success w-30 py-2">Submit</button>

          {errors
            &&
            <div>
              {errors.map((error) => (
                <div key={error}>
                  <ErrorMessages error={error} />
                </div>
              ))}
            </div>

          }
        </form>
      </div>
    </div>
  );


}

export default Home;