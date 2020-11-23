import React, { useState, useEffect } from "react";
import axios from "axios";

import UserCard from "../UserCard";

async function fetchUser() {
  return axios.get("https://randomuser.me/api/");
}

function UserList() {
  const [users, setUsers] = useState([]);
  const [userCount, setUserCount] = useState(1);

  useEffect(() => {
    async function fetchNewUser() {
      const results = await fetchUser();
      setUsers([...users, ...results.data.results]);
    }
    fetchNewUser();
  }, [userCount]);

  const onClick = () => {
    setUserCount(userCount + 1);
  };

  if (!users) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

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
      <button onClick={() => onClick()}>Add User</button>
    </div>
  );
}

export default UserList;
