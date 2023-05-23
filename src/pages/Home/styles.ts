import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  height: 100vh; 
  display: flex;
  
  background-color: ${({theme}) => theme.colors.mainWhite};;
`;

export const ContentContainer = styled.div`
  display: flex;
  gap: 15px;
`;
