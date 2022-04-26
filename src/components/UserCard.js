import React from "react";

const UserCard = ({ user }) => {
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
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <p>{user.website}</p>
        </div>
      </div>
    </div>
  );
};
export default UserCard;
