import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import Chatroom from "./Chatroom";
import ErrorMessages from "./ErrorMessages";

/** Shows login form
 *
 * Props:
 * - login(): function to be called in parent
*/

function Home({login}){

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
      <form className="LoginForm" onSubmit={handleSubmit}>
        <div>
          <label><p> Username </p></label>
          <input value={loginData.username}
            name="username"
            onChange={handleChange} />
        </div>
        <div>
          <label> <p>Password</p> </label>
          <input value={loginData.password}
            name="password"
            type="password"
            onChange={handleChange} />
        </div>
        <button>Submit</button>

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
    );


}

export default Home;