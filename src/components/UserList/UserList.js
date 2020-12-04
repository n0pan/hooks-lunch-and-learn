import React from "react";
import axios from "axios";

import UserCard from "../UserCard";

class UserList extends React.Component {
  state = { users: null, totalUsersFetched: null, requestedUsersCount: 1 };

  constructor() {
    super();

    this.fetchUsers = this.fetchUsers.bind(this);
    this.onAddUsers = this.onAddUsers.bind(this);
  }

  async componentDidMount() {
    const users = await this.fetchUsers(1);
    this.setState({ users: [...users], totalUsersFetched: 1 });
  }

  async fetchUsers(userCount) {
    const users = await axios.get(
      `https://randomuser.me/api/?results=${userCount}`
    );
    return users.data.results;
  }

  handleChangeRequestedUsers(e) {
    this.setState({
      requestedUsersCount: e.target.value
    });
  }

  async onAddUsers(requestedUsersCount) {
    const newUsers = await this.fetchUsers(requestedUsersCount);
    this.setState({
      users: [...this.state.users, ...newUsers],
      totalUsersFetched:
        this.state.totalUsersFetched + parseInt(requestedUsersCount)
    });
  }

  render() {
    const { users } = this.state;

    if (!users) {
      return (
        <div>
          <p>Loading..</p>
        </div>
      );
    }

    return (
      <section>
        <div>
          <h1>Users ({this.state.users.length})</h1>
        </div>
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
          <input
            type="number"
            value={this.state.requestedUsersCount}
            onChange={e => this.handleChangeRequestedUsers(e)}
          />
          <button
            onClick={() => this.onAddUsers(this.state.requestedUsersCount)}
          >
            Add {this.state.requestedUsersCount} new user(s)
          </button>
        </div>
      </section>
    );
  }
}

export default UserList;
