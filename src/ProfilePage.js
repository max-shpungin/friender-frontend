import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import io from 'socket.io-client';

import FrienderAPI from "./api";
import UserCard from "./UserCard";

/**
 * Shows the user, has edit profile button, which brings up
 * signup form with the form details filled, shows the chat window
*/

// Work out how to get the returned link to work with the right permissions
// Upload photo here, we will have the username from the params



// from the username we want to query the database with an API method to get
// the info for the user

const socket = io('http://localhost:3001');

function ProfilePage() {
  const { username } = useParams();

  const [userDetails, setUserDetails] = useState(false);
  const [file, setFile] = useState('');

  /** CHAT STUFF HERE */
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');

  function handleMessageClick(evt) {
    evt.preventDefault();
    sendMessage();
  }
  function sendMessage() {
    if (currentMessage) {
      socket.emit('message', currentMessage);
      setCurrentMessage('');
    }
  }

  useEffect(function getIncomingMessagesAndSet() {
    socket.on('message', function (message) {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
  }, []);

  /** END CHAT STUFF */

  console.log('ProfilePage, username:', username);
  console.log('ProfilePage, userDetails:', userDetails);



  // <div className="messages">
  //   {messages.map((message, index)=>{
  //     <div key={index} className="message">
  //       return()
  //       {message}
  //     </div>
  //   })}
  // </div>


  useEffect(function fetchAndSetUserDetails() {
    async function fetchUserDetails() {
      try {
        const fetchedUserDetails = await FrienderAPI.getUser(username);
        setUserDetails(fetchedUserDetails);
        console.log('ProfilePage, fetchedUserDetails:', fetchedUserDetails);
      } catch (err) {
        console.error(err);
      }
    }
    if (!userDetails) {
      fetchUserDetails();
    }
  }, [userDetails]);


  function handleChange(evt) {
    setFile(evt.target.files[0]);
  }

  async function handleSubmit(evt) {
    evt.preventDefault();

    const formData = new FormData();
    formData.set("file", file);

    // FIXME:
    const resp =
      await fetch(`http://localhost:3001/users/${username}`, {
        method: "PATCH",
        body: formData
      });
    console.log('submitHandler, resp', resp);
  }

  const keys = Object.keys(userDetails);
  const deets = keys.map((key) => {
    return (
      <div key={key}>{key}:{userDetails[key]}</div>
    );
  });


  return (
    <div className="ProfilePage">
      <p>PROFILE PAGE</p>
      <UserCard userDetails={userDetails} />
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleChange} />
        <button>kaboom</button>
      </form>

      <div className="messages">
        {messages.map((message, index) => {
          <div key={index} className="message">
            {message}
          </div>;
        })}
      </div>

    </div>
  );

}





export default ProfilePage;