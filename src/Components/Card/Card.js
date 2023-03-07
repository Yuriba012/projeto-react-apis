import {
  Container,
  InfoText,
  Pokeball,
  PokeDetails,
  PokeImage,
  TypeList,
} from "./style";
import pokeball from "../../assets/pokeball.png";
import { useNavigate } from "react-router-dom";
import { goToDetails } from "../../router/Coordinator.js";
import { useRequestPokeData } from "../../hooks/useRequestPokeData.js";
import { Type } from "../Type/Type";

export function Card(props) {
  const navigate = useNavigate();
  const pokemonData = useRequestPokeData(
    props.pokemon.url,
    {
      id: 0,
      types: [],
      pictureUrl: "",
      color: "",
    },
    props.pokemon.name
  );

    const capitalizeText = (text) =>{
      return (text[0].toUpperCase() + text.slice(1))
    }

  return (
    <Container color={pokemonData.color}>
      <Pokeball src={pokeball} alt="Pokeball" />
      <div>
        <InfoText>
          <p>#{pokemonData.id}</p>
          <h1>{capitalizeText(props.pokemon.name)}</h1>
        </InfoText>
        <TypeList>
          {" "}
          {pokemonData.types.map((pokeType) => {
            return <Type key={pokeType.type.name} type={pokeType.type.name} />;
          })}
        </TypeList>
      </div>
      <PokeDetails>
        <p onClick={() => goToDetails(navigate)}>Detalhes</p>
        {props.page === "home" ? (
          <button onClick={() => props.addToPokedex(props.pokemon)}>
            Capturar!
          </button>
        ) : (
          <button onClick={() => props.removeFromPokedex(props.pokemon)}>
            Remover
          </button>
        )}
      </PokeDetails>
      <PokeImage src={pokemonData.pictureUrl} alt="Pokemon" />
    </Container>
  );
}
