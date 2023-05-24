import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 70%;
  height: 100vh;
  margin-left:auto;
  margin-right:auto;
  padding-top: 15%;
  background-color: ${({theme}) => theme.colors.mainPeach};
`;

//
export const ContentContainer = styled.div`
  flex-wrap: wrap;
  display: flex;
  gap: 21px;
`;

//titulo, vigentes, card //// titulo, passado, card