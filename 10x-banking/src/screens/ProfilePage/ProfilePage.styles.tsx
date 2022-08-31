import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  padding: 2rem;
  flex-direction: row;
  width: 95%;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    /* For mobile phones: */
    flex-direction: column;
    height: 90vh;
    width: 75%;
  }
`;
export const DetailsGroup = styled.div`
  flex: 0.1;
  display: flex;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex: 0.2;
  height: 3rem;
  flex-direction: row;
  justify-content: space-between;
`;
