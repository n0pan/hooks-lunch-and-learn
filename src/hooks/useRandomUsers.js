import React, { useEffect, useState } from "react";
import axios from "axios";

async function fetchUsers(userCount) {
  const users = await axios.get(
    `https://randomuser.me/api/?results=${userCount}`
  );
  return users.data.results;
}

function useRandomUsers(initialUsersCount) {
  const [users, setUsers] = useState(null);

  useEffect(async () => {
    const users = await fetchUsers(initialUsersCount);
    setUsers([...users]);
  }, []);

  const addUsers = async requestedUsersCount => {
    const newUsers = await fetchUsers(requestedUsersCount);
    setUsers([...users, ...newUsers]);
  };

  return { users, addUsers };
}

export default useRandomUsers;
