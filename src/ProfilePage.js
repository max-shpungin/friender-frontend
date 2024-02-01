import FrienderAPI from "./api";
import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

/**
 * Shows the user, has edit profile button, which brings up
 * signup form with the form details filled, shows the chat window
*/

// Work out how to get the returned link to work with the right permissions
// Upload photo here, we will have the username from the params



  // from the username we want to query the database with an API method to get
  // the info for the user

async function ProfilePage() {

  const [userDetails, setUserDetails] = useState('');
  const { username } = useParams();

  console.log('ProfilePage, username:', username);
  console.log('ProfilePage, userDetails:', userDetails);

  debugger;

  useEffect(function fetchAndSetUserDetails(){
    async function fetchUserDetails(){


      const fetchedUserDetails = await FrienderAPI.getUser(username);
      console.log('ProfilePage, fetchedUserDetails:', fetchedUserDetails);

      setUserDetails(fetchedUserDetails);
    }
    fetchUserDetails();
  }, [userDetails]);


  const [file, setFile] = useState('');
  function handleChange(evt) {
    setFile(evt.target.files[0]);
  }

  async function handleSubmit(evt) {
    evt.preventDefault();


  const formData = new FormData();
  formData.set("file", file);

  // FIXME:
  const resp =
    await fetch('http://localhost:3001/test', {
      method: "POST",
      body:formData
    });
    console.log('submitHandler, resp', resp);
  }

  // const keys = Object.keys(userDetails);
  // const deets = keys.map((key)=>{
  //   return (
  //     <div>{key}:{userDetails[key]}</div>
  //   )
  // })


  return (
    <div className="ProfilePage">


    </div>
  );
}

{/* <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleChange} />
        <button>kaboom</button>
      </form> */}

export default ProfilePage;