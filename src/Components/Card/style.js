import styled from "styled-components";

export const Container = styled.article`
  background-color: rgba(114, 159, 146, 1);
  width: 440px;
  height: 210px;
  margin: 100px;
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 20px 28px;
  justify-content: space-between;
  border-radius: 16px;
  margin: 20px 0;
`;

export const InfoText = styled.div`
  color: white;
  margin-bottom: 8px;
  >h1 {
    font-size: 32px;
    margin: 0;
    padding: 0;
  }
  >p{
    margin:0;
  }
`;

export const PokeDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > button {
    width: 146px;
    height: 38px;
    border: none;
    border-radius: 8px;
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    cursor: pointer;
  }
  > p {
    font-weight: bold;
    text-decoration: underline;
    color: white;
  }
`;

export const Pokeball = styled.img`
  position: absolute;
  right: -4px;
  top: 0;
`;

export const PokeImage = styled.img`
  position: absolute;
  right: 10px;
  top: -54px;
  height: 193px;
  width: 193px;
`;
