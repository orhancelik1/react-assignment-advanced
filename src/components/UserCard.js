import React, { useState } from "react";
import Navbar from "./Navbar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { padding } from "@mui/system";

const fields = ["name", "email", "phone", "website"];

const UserCard = ({ user, handleDelete, editUser, index }) => {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = useState(user);

  const onChangeField = (field, value) => {
    setData((state) => ({
      ...state,
      [field]: value,
    }));
  };

  const saveUser = () => {
    editUser({ user: data, index, callback: closeModal });
  };

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

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
        <Navbar
          openModal={openModal}
          id={user.id}
          handleDelete={handleDelete}
        />
      </div>

      <Dialog fullWidth open={open} onClose={closeModal}>
        <DialogContent>
          {fields.map((i) => {
            const error = !user[i] || !data[i]?.length;
            return (
              <div className="input-container">
                <div className="input-label">{i}</div>
                <TextField
                  style={{
                    margin:"-10px",
                  }}
                  margin="none"
                  fullWidth
                  onChange={(event) => onChangeField(i, event.target.value)}
                  size="small"
                  error={error}
                  id="outlined-error-helper-text"
                  defaultValue={user[i]}
                  helperText={error ? "This field is required" : " "}
                />
              </div>
            );
          })}
        </DialogContent>

        <DialogActions>
          <Button variant="outlined" onClick={closeModal}>
            Cancel
          </Button>
          <Button variant="contained" onClick={saveUser}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default UserCard;
