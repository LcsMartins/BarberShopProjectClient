import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 85,5%;
  height: 100vh; 
  display: flex;
  background-color: ${({theme}) => theme.colors.mainPeach};;
`;

export const ContentContainer = styled.div`
  display: flex;
  gap: 15px;
`;
