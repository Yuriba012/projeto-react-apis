import axios from "axios";
import { useState, useEffect } from "react";
import { baseUrl } from "../baseUrl";

export function useRequestPokeData(url, initState) {
  const [properties, setProperties] = useState(initState);
  let request = {};
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        request = {...properties,
          id: response.data.id,
          types: response.data.types,
          pictureUrl: response.data.sprites.other.dream_world.front_default,
          color: "",
          name: response.data.species.name,
          pictureFront: response.data.sprites.front_default,
          pictureBack: response.data.sprites.back_default,
          moves: response.data.moves,
          stats:response.data.stats
        };

        axios
          .get(`${baseUrl}pokemon-species/${request.name}/`)
          .then((response) =>{
            request.color = response.data.color.name
            setProperties(request)
          }
          )
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, []);

  return properties;
}
