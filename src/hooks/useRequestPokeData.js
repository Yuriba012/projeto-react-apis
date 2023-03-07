import axios from "axios";
import { useState, useEffect } from "react";
import { baseUrl } from "../baseUrl";

export function useRequestPokeData(url, initState, name) {
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
        };

        axios
          .get(`${baseUrl}pokemon-species/${name}/`)
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
