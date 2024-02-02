import { useState, React, useEffect } from "react";
import io from 'socket.io-client';
import FrienderAPI from './api';
/**
 * Props:
 *  - usernaname (current user)
 *
 * State:
 *  - ////
 *
 * Functions:
 *  - doSignUp
 *
 * App -> RoutesList -> Home, UserListings, User Profile, Signup Page
 */

//FIXME: right now {user} is being passed down but actually we are reading from localStorage, pick one or the other

const socket = io('http://localhost:3002'); //FIXME: HARD CODED!

function Chatroom({ user }) {

  const [users, setUsers] = useState([]);
  console.log("Chatroom username", user);

  /** CHAT STUF**************************************************** */
  const [messages, setMessages] = useState([]); //recieving
  const [currentMessage, setCurrentMessage] = useState(''); //sending

  useEffect(function getAllMessagesOnInitialMount() {
    async function fetchAllMessages() {
      try {
        const fetchedMessages = await FrienderAPI.getAllMessages();
        console.log("fetchedMessages", fetchedMessages);
        setMessages((prevMessages) => [...prevMessages, ...fetchedMessages]);
      } catch (err) {
        console.err(err);
      }
    }
    fetchAllMessages();

  }, []);

  function handleMessageClick(evt) {
    // evt.preventDefault();

    console.log("PROFILE Page > handleMessageClick");
    sendMessage();
  }

  /** SENDING */
  function sendMessage() {
    if (currentMessage) {
      console.log("PROFILE Page > sendMessage currMessage:", currentMessage);
      socket.emit('message', `${localStorage.getItem('user')}: ${currentMessage}`);
      setCurrentMessage('');
    }
  }

  /** RECIEVING */
  useEffect(function getIncomingMessagesAndSet() {
    socket.on('message', function (message) {
      setMessages((prevMessages) => [...prevMessages, message]);
      console.log("PROFILE Page > useEffect, messages:", messages);
    });
  }, []);

  /** END CHAT STUFF *****************************************************/

  console.log("users state:", users);

  useEffect(function fetchAllUsersOnMount() {
    async function fetchAllUsers() {
      try {
        const fetchedUsers = await FrienderAPI.getAllUsers();
        console.log("fetchedUsers", fetchedUsers);
        console.log("fetchedUsers.users", fetchedUsers.users);
        setUsers(fetchedUsers.users);
      } catch (err) {
        console.error(err);
      }
    }
    fetchAllUsers();
  }, []);

  return (
    <div className="Chatroom">
      <h1>Welcome to AOL</h1>
      {console.log("users in the return userslisting page:", users)}

      <div className="Chatroom-UsersList">
        <ul>
          {users.map(user => {
            return (
              <li key={user.username}>{user.username}</li>
            );
          }
          )}
        </ul>
      </div>

      <div className="Chatroom-chat">
        <div className="messages">
          {messages.map((message, index) => {
            return (
              <div key={index} className="message">
                {message}
              </div>);
          })}
        </div>

        <input
          type="text"
          placeholder="Type a message..."
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
        />
        <button onClick={handleMessageClick}>Send</button>
      </div>
    </div>
  );
}

export default Chatroom;