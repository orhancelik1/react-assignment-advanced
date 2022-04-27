import React from "react";
import UserCard from "./UserCard";

const Users = ({ users,handleDelete}) => {
  return (
    <div>
      {users.map((userr) => (
        <UserCard
          key={userr.id}
          user={userr}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};
export default Users;
