import React from "react";
import Navbar from "./Navbar";

const UserCard = ({ user,handleDelete }) => {
  return (
    <div class="container">
      <div className="column">
        <div className="overflow">
          <img
            className="image"
            alt="avatar"
            src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`}
          />
        </div>

        <div class="body-info">
          <h1>{user.name}</h1>
          <p>
            <ion-icon name="mail-outline"></ion-icon>
            {user.email}
          </p>
          <p>
            <ion-icon name="call-outline"></ion-icon>
            {user.phone}
          </p>
          <p>
            <ion-icon name="globe-outline"></ion-icon>
            {user.website}
          </p>
        </div>
        <Navbar id={user.id} handleDelete={handleDelete}/>
      </div>
    </div>
  );
};
export default UserCard;
