import React from "react";
import UserCard from "./UserCard";

const Users = ({ users, ...props }) => {
  return (
    <div>
      {users.map((userr, index) => (
        <UserCard key={userr.id} user={userr} index={index} {...props} />
      ))}
    </div>
  );
};
export default Users;
