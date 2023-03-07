import {
  Container,
  BackHomeButton,
  Logo,
  PokedexButton,
  RemoveButton,
} from "./style";
import pokemonLogo from "../../assets/pokemon-logo.png";
import { GlobalStyle } from "../../GlobalStyle.js";
import { goHome, goToPokedex } from "../../router/Coordinator";
import { useNavigate } from "react-router-dom";

export function Header(props) {
  const testButton = true;
  const navigate = useNavigate();

  return (
    <Container>
      <GlobalStyle />
      {props.page !== "home" ? (
        <BackHomeButton onClick={() => goHome(navigate)}>
          Todos Pokémons
        </BackHomeButton>
      ) : (
        <BackHomeButton />
      )}
      <Logo src={pokemonLogo} />
      {props.page === "home" ? (
        <PokedexButton onClick={() => goToPokedex(navigate)}>
          Pokédex
        </PokedexButton>
      ) : props.page === "details" ? (
        <RemoveButton>Excluir da Pokédex</RemoveButton>
      ) : (
        <BackHomeButton></BackHomeButton>
      )}
    </Container>
  );
}
