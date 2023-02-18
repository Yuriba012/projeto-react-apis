import {
  Container,
  BackHomeButton,
  Logo,
  PokedexButton,
  RemoveButton,
} from "./style";
import pokemonLogo from "../../assets/pokemon-logo.png";
import { GlobalStyle } from "../../GlobalStyle.js";

export function Header() {
  const testButton = true;
  const isHomePage = true;

  return (
    <Container>
      <GlobalStyle />
      {!isHomePage ? <BackHomeButton>Todos Pokémons</BackHomeButton> : <BackHomeButton/>}
      <Logo src={pokemonLogo} />
      {testButton ? (
        <PokedexButton>Pokédex</PokedexButton>
      ) : (
        <RemoveButton>Excluir da Pokédex</RemoveButton>
      )}
    </Container>
  );
}
