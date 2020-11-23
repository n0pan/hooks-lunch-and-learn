import React from "react";

import {
  UserCardContainer,
  ImageContainer,
  Image,
  UserInfoContainer
} from "./styles";

function UserCard({ firstName, lastName, email, city, state, zip, imageSrc }) {
  return (
    <UserCardContainer
      id={`user-${firstName}-card`}
      style={{ display: "flex", flexDirection: "row" }}
    >
      <ImageContainer>
        <Image src={imageSrc} alt={`user-${firstName}-image`} />
      </ImageContainer>
      <UserInfoContainer>
        <h2>{`${firstName} ${lastName}`}</h2>
        {email && <p>{email}</p>}
        <p>{`${city}, ${state}, ${zip}`}</p>
      </UserInfoContainer>
    </UserCardContainer>
  );
}

export default UserCard;
