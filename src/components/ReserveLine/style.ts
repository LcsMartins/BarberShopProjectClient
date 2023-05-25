import styled from 'styled-components';

export const Card = styled.div`
    border: 2px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    height: 160px;
    width: 100%;
    padding: 15px 15px 15px 15px;
    display: flex;
    flex-direction: row;
    gap: 20px;
    box-shadow: 0px 0px 8px rgba(0,0,0,0.5);

`
export const Image = styled.img`
  width:125px;
  height:125px;

`
export const Dados = styled.div`
  display: flex;
  height:125px;
  width: 100%;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 8px;
  padding: 15px;
  cursor: pointer;
`;

export const Wrapper = styled.span`
    height: 1px;
    width: 100%;
    background-color: #fff;
`
