import styled from "styled-components";

export const Form = styled.form`
  margin: 20px auto;
  width: 100%;
  max-width: 400px;
  padding: 1.5em;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Input = styled.input`
  max-width: 100%;
  height: 30px;
`;
export const Button = styled.button`
  font-size: 1.3em;
  font-weight: 700;
  padding-right: 20px;
  background-color: ${({ theme }) => theme.colors.mainBlue};
  color: ${({ theme }) => theme.colors.mainWhite};
  height: 30px;
  cursor: pointer;
`;
export const MyH4 = styled.h4`
  margin: 10px 0px;
  font-size: 1em;
`;

export const MyP = styled.p`
  color: red;
`;
