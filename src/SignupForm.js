import { React, useState } from "react";
import ErrorMessages from "./ErrorMessages";

/**
 * Props:
 *  - doSignUp(): function to be called in parent
 *
 * State:
 *  - formData
 *
 * Functions:
 *  - handleSubmit
 *  - handleChange
 *
 * App -> RoutesList -> Signup Page -> Signup Form
 */


function SignupForm({ doSignUp }) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    hobbies: '',
    number_stree_name: '',
    city: '',
    friend_radius: '',
    photo_url: '',
  });
  const [errors, setErrors] = useState([]);

  function handleChange(evt) {
    let { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,
    })
    );
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await doSignUp(formData);
      setFormData({
        username: '',
        password: '',
        hobbies: '',
        number_street_name: '',
        city: '',
        friend_radius: '',
        photo_url: '',
      });
      navigate('/');
    } catch (err) {
      setErrors(err);
    }
  }

  return (
    <form className="SignUpForm" onSubmit={handleSubmit}>
      <label> Username </label>
      <input value={formData.username}
        key="username"
        onChange={handleChange}
        name="username" />
      <label> Password </label>
      <input value={formData.password}
        name="password"
        type="password"
        onChange={handleChange} />
      <label> Hobbies </label>
      <input value={formData.hobbies}
        name="hobbies"
        onChange={handleChange} />
      <label> Street number name </label>
      <input value={formData.number_street_name}
        name="number_street_name"
        onChange={handleChange} />
      <label> City </label>
      <input value={formData.city}
        name="city"
        onChange={handleChange} />
      <label> Friend Radius </label>
      <input value={formData.friend_radius}
        name="friend_radius"
        onChange={handleChange} />
      <label> Photo URL </label>
      <input value={formData.photo_url}
        name="photo_url"
        onChange={handleChange} />
      <button>Submit</button>
      {errors
        &&
        <div>
          {errors.map((error) => (
            <div key={error}>
              <ErrorMessages errors={errors} />
            </div>
          ))}
        </div>
      }
    </form>
  );



}

export default SignupForm;