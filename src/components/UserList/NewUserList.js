import React, { useState } from "react";

import { useRandomUsers, useFormInput } from "../../hooks";

import UserCard from "../UserCard";

function NewUserList() {
  const [requestedUsersCount, setRequestedUsersCount] = useState(1);
  const { users, addUsers } = useRandomUsers(1);
  const [name, setName] = useFormInput("Michel");
  const [age, setAge] = useFormInput(12);

  const handleChangeRequestedUsers = e => {
    setRequestedUsersCount(e.target.value);
  };

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
        <h1>Users ({users.length})</h1>
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
          value={requestedUsersCount}
          onChange={e => handleChangeRequestedUsers(e)}
        />
        <input type="text" value={name} onChange={e => setName(e)} />
        <input type="text" value={age} onChange={e => setAge(e)} />
        <p>{name}</p>
        <button onClick={() => addUsers(requestedUsersCount)}>
          Add {requestedUsersCount} new user(s)
        </button>
      </div>
    </section>
  );
}

export default NewUserList;
