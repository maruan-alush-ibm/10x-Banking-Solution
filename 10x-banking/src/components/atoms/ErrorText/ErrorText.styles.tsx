import styled from "styled-components";
import { ErrorMessage, Field } from "formik";

export const StyledError = styled(ErrorMessage)`
  color: red;
`;

export const NamesEdit = styled(Field)`
  font-weight: 400px;
  font-size: 32px;
  color: black;
  margin-top: 1rem;
`;
