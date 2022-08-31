import styled from "styled-components";
import { Link } from "react-router-dom";

export const Item = styled(Link)`
  display: flex;
  flex-direction: row;
  padding: 2rem;
  margin-left: 2rem;
  height: 8rem;
  width: 40vw;
  transition: background-color 100ms linear;
  border-radius: 15px;
  :hover {
    background-color: rgba(0, 0, 0, 0.2);
  }

  @media only screen and (max-width: 768px) {
    width: auto;
    margin-left: 0;
    padding: 2rem;
  }
`;

export const AvatarParent = styled.div`
  flex: 0.2;
`;
