import React from "react";
import UserCard from "./UserCard";

const Users = ({ users }) => {
  return (
    <div>
      {users.map((userr) => (
        <UserCard key={userr.id} user={userr} />
      ))}
    </div>
  );
};
export default Users;
