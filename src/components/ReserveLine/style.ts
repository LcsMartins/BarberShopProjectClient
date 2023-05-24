import styled from 'styled-components';


export const CardContainer = styled.div`
  width: 220px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 8px;
  padding: 10px;
  cursor: pointer;
  background-color: ${({theme})=>theme.colors.secondBlue};
`;

export const Wrapper = styled.span`
    height: 1px;
    width: 100%;
    background-color: #fff;
`
