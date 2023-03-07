import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage.js";
import { PokedexPage } from "../pages/PokedexPage/PokedexPage.js";
import { DetailsPage } from "../pages/DetailsPage/DetailsPage.js";
import { useRequestList } from "../hooks/useRequestList.js";
import { useState } from "react";
import { baseUrl } from "../baseUrl.js";

export function Router() {
  const list = useRequestList(`${baseUrl}pokemon/?limit=60`, []);
  const [pokedexList, setPokedexList] = useState([]);

  const addToPokedex = (pokemonToAdd) => {
    const isInPokedex = pokedexList.find(
      (currentPokemon) => currentPokemon.name === pokemonToAdd.name
    );
    if (!isInPokedex) {
      const newPokedex = [...pokedexList, pokemonToAdd];
      setPokedexList(newPokedex);
    }
  };

  const removeFromPokedex = (pokemonToRemove) => {
    const newPokedex = pokedexList.filter(
      (currentPokemon) => currentPokemon.name !== pokemonToRemove.name
    );
    setPokedexList(newPokedex)
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              list={list}
              pokedexList={pokedexList}
              addToPokedex={addToPokedex}
              removeFromPokedex={removeFromPokedex}
            />
          }
        />
        <Route
          path="/pokedex"
          element={
            <PokedexPage
              list={list}
              pokedexList={pokedexList}
              removeFromPokedex={removeFromPokedex}
              addToPokedex={addToPokedex}
            />
          }
        />
        <Route path="/details/:id" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
