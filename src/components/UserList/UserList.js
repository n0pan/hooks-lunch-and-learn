import React from "react";
import axios from "axios";

import UserCard from "../UserCard";

class UserList extends React.Component {
  state = { users: null, userCount: 1 };

  async componentDidMount() {
    const results = await this.fetchUser();
    this.setState({ users: [...results.data.results] });
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.userCount !== this.state.userCount) {
      const results = await this.fetchUser();
      this.setState({ users: [...this.state.users, ...results.data.results] });
    }
  }

  fetchUser = () => {
    return axios.get("https://randomuser.me/api/");
  };

  onClick = () => {
    this.setState({
      userCount: this.state.userCount + 1
    });
  };

  render() {
    const { users } = this.state;

    if (!users) return null;

    return (
      <div>
        {users.map(user => (
          <UserCard
            key={user.login.uuid}
            firstName={user.name.first}
            lastName={user.name.last}
            email={user.email}
            imageSrc={user.picture.large}
            city={user.location.city}
            state={user.location.state}
            zip={user.location.postcode}
          />
        ))}
        <button onClick={() => this.onClick()}>Add User</button>
      </div>
    );
  }
}

export default UserList;
