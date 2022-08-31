import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 768px) {
    /* For mobile phones: */
    flex-direction: column;
  }
`;

export const ListWrapper = styled.div`
  display: flex;
  flex: 0.5;
  flex-direction: column;
`;
export const UserFormWrapper = styled.div``;

export const DetailsGroup = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex: 0.25;
  flex-direction: row;
  padding-left: 2rem;
  height: 3rem;
  margin-bottom: 1rem;
  justify-content: space-between;
`;
