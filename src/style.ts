import styled from "styled-components";
import { Button } from "react-bootstrap";

export const MyH1 = styled.h1`
  color: red;
`;
export const FieldWrapper = styled.p`
  color: grey;
  cursor: pointer;
  background-color: white;
  :hover {
    background-color: lightgray;
  }
`;
export const CardWrapper = styled.div`
  background-color: papayawhip;
  margin: 2px;
  padding: 10px;
`;
export const StyledButton = styled(Button)`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export const InputWrapper = styled.input`
  width: 100%;
  height: 60px;
  border: none;
  &:hover {
    border: none;
  }
`;
export const CrossButtonWrapper = styled.span`
  cursor: pointer;
`;
