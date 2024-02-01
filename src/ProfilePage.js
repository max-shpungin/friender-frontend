import FrienderAPI from "./api";
import { React, useState } from "react";

function ProfilePage (){

  const [ formData, setFormData ] = useState('');

  console.log("formData", formData)

  function handleChange(evt) {
    console.log("evt.target.files: ", evt.target.files)
    setFormData(fData => (

      evt.target.files

    //   {
    //   ...fData,
    //   [name]: value,
    // }

    )
    );
  }

  // there is a property called evt.target.files

  async function handleSubmit(evt){
    evt.preventDefault();
    FrienderAPI.request("test", formData, "POST");
  }


  return (
    <div className="ProfilePage">
      <form onSubmit={handleSubmit}>
        <input type="file"
        value={formData.photo}

        name="photo"
        onChange={handleChange} />

        <button>kaboom</button>
      </form>
    </div>
  )
}

export default ProfilePage;