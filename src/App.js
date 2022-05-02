import "./App.css";
import React, { Component } from "react";
import Users from "./components/UserList";

class App extends Component {
  state = {
    users: [],
  };

  handleDelete = (id) => {
    const newList = this.state.users.filter((item) => item.id !== id);
    this.setState({ users: newList });
  };

  editUser = ({ user, index, callback }) => {
    const newList = this.state.users;
    newList[index] = user;

    this.setState({ users: newList }, () => callback && callback());
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ users: data });
      })
      .catch(console.log);
  }

  render() {
    return (
      <Users
        users={this.state.users}
        handleDelete={this.handleDelete}
        editUser={this.editUser}
      />
    );
  }
}

export default App;
