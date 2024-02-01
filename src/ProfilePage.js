import FrienderAPI from "./api";
import { React, useState } from "react";
import { useParams } from "react-router-dom";

/**
 * Shows the user, has edit profile button, which brings up
 * signup form with the form details filled, shows the chat window
*/

// Work out how to get the returned link to work with the right permissions
// Upload photo here, we will have the username from the params



  // from the username we want to query the database with an API method to get
  // the info for the user

function ProfilePage() {

  const { username } = useParams();


  const [file, setFile] = useState('');

  function handleChange(evt) {
    setFile(evt.target.files[0]);
  }

  async function handleSubmit(evt) {
    evt.preventDefault();


  const formData = new FormData();
  let file2;
  formData.set("file", file);

  // FIXME:
  const resp =
    await fetch('http://localhost:3001/test', {
      method: "POST",
      body:formData
    });
    console.log('submitHandler, resp', resp);
  }


  return (
    <div className="ProfilePage">
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleChange} />
        <button>kaboom</button>
      </form>
    </div>
  );
}

export default ProfilePage;