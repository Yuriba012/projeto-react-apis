import { Card } from "../Card/Card.js";
import { Container, List, ListTitle } from "./style.js";

export function PokeList() {
  const isHomePage = true;

  return (
    <Container>
      {isHomePage ? (
        <ListTitle>Todos Pokémons</ListTitle>
      ) : (
        <ListTitle>Meus Pokémons</ListTitle>
      )}
      <List>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </List>
    </Container>
  );
}
