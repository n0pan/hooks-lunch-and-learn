import styled from "styled-components";

export const UserCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  text-align: left;
  padding: 15px 25px 15px 25px;
`;

export const ImageContainer = styled.div`
  margin-right: 25px;
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
`;

export const UserInfoContainer = styled.div`
  padding: 0 15px 15px 15px;

  h2 {
    margin: 0;
  }
  p {
    margin: 0;
  }
`;
