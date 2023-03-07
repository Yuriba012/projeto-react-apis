import styled from "styled-components";

export const Container = styled.header`

  flex-basis: 160px;
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const BackHomeButton = styled.button`
  background-color: white;
  width: 210px;
  height: 36px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  color: #1a1a1a;
  text-decoration-line: underline;
  border: 0;
  cursor: pointer;
`;

export const Logo = styled.img`
  width: 307px;
  height: 113px;
`;

export const PokedexButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  width: 287px;
  height: 74px;
  background-color: #33a4f5;
  border-radius: 8px;
  font-family: "Poppins";
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  border: 0px;
  cursor: pointer;
`;

export const RemoveButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  width: 226px;
  height: 57px;
  background: #ff6262;
  border-radius: 8px;
`;
