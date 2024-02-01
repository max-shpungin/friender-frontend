import FrienderAPI from "./api";
import { React, useState } from "react";

function ProfilePage() {

  const [file, setFile] = useState('');

  function handleChange(evt) {
    setFile(evt.target.files[0]);
  }

  // there is a property called evt.target.files

  async function handleSubmit(evt) {
    evt.preventDefault();

  //  console.log('submitHandler, file', file);

  const formData = new FormData();
  let file2;
  formData.set("file", file);

  const resp =
    await fetch('http://localhost:3001/test', {
      method: "POST",
      body:formData
    });

    // const resp = await FrienderAPI.request("test", file, "POST");
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