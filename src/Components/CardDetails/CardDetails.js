import {
  Container,
  InfosLeft,
  InfosRight,
  FrontImage,
  BackImage,
  Attributes,
  BaseStats,
  Moves,
  Move,
  Pokeball,
  Pokemon
} from "./style";
import { InfoText } from "../Card/style";
import frontPokemon from "../../assets/front-pokemon.png";
import backPokemon from "../../assets/back-pokemon.png";
import baseStats from "../../assets/base-stats.png";
import poison from '../../assets/poison.png'
import grass from '../../assets/grass.png'
import pokeball from "../../assets/pokeball-details.png"
import pokemon from "../../assets/bulbasaur.png"
import { GlobalStyle } from "../../GlobalStyle.js";

export function CardDetails() {
  return (
    <Container>
      <GlobalStyle />
      <InfosLeft>
        <FrontImage src={frontPokemon} />
        <Attributes>
          <BaseStats src={baseStats} />
        </Attributes>
        <BackImage src={backPokemon} />
      </InfosLeft>
      <Pokeball src={pokeball} alt='Pokeball'/>
      <Pokemon src={pokemon} alt="Pokemon"/>
      <InfosRight>
        <InfoText>
          <p>#01</p>
          <h1>Bulbasaur</h1>
        </InfoText>
        <img src={poison} alt="poison" />
        <img src={grass} alt="grass" />
        <Moves>
            <h2>Moves:</h2>
            <Move>Razor Wind</Move>
            <Move>Sword Dance</Move>
            <Move>Cut</Move>
        </Moves>
      </InfosRight>
    </Container>
  );
}
