import styled from "styled-components";

export const Container = styled.section`
  width: 78rem;
  align-self: center;
  background-color: rgba(114, 159, 146, 1);
  z-index: 1;
  border-radius: 37.8857px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  padding: 28px;
  position: relative;
`;

export const InfosLeft = styled.article`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  justify-content: center;
`;
export const InfosRight = styled.article`
    z-index:1;
`;

export const FrontImage = styled.img`
  width: 16rem;
  height: 16rem;
`;

export const Attributes = styled.div`
  background: #ffffff;
  border-radius: 12px;
  grid-row: 1/3;
  grid-column: 2;
  padding: 20px;
  width: 18rem;
`;

export const BaseStats = styled.img`
  width: 307px;
  height: 257px;
`;

export const BackImage = styled.img`
  width: 16rem;
  height: 16rem;
  align-self: flex-end;
`;

export const Moves = styled.article`
  width: 292px;
  height: 420px;
  background: #ffffff;
  border-radius: 8px;
  padding: 20px;
  margin-top: 20px;
  >h2{
    margin-top:0;
  }
  display:flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Move = styled.p`
background: #ECECEC;
border: 1px dashed rgba(0, 0, 0, 0.14);
border-radius: 12px;
padding: 4px;
`

export const Pokeball = styled.img`
position: absolute;
right: 0;
top: 0;
height: 640px;
`
export const Pokemon = styled.img`
position: absolute;
right: 50px;
top: -110px;
width: 270px;
height: 270px;
`