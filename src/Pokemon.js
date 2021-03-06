/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { Typography, CircularProgress, Button, Card } from "@material-ui/core";
import axios from "axios";
import PokemonDetailCard from './PokemonDetailCard';

const Pokemon = (props) => {
  const { match, history } = props;
  const { params } = match;
  const { pokemonId } = params;
  const [pokemon, setPokemon] = useState(undefined);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
      .then(function (response) {
        const { data } = response;
        setPokemon(data);
      })
      .catch(function (error) {
        setPokemon(false);
      });
  }, [pokemonId]);

  const generatePokemonJSX = (pokemon) => {
    const { name, id, species, height, weight, types, sprites} = pokemon;
    const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
    const { front_default } = sprites;
    return (      
      <PokemonDetailCard pokemon={pokemon} history={history}/>
    );
  };

  return (
    // <Card item style={{maxWidth: '345px'}}>
    <Card>
        {pokemon === undefined && <CircularProgress />}
        {pokemon !== undefined && pokemon && generatePokemonJSX(pokemon)}
        {pokemon === false && <Typography> Pokemon not found</Typography>}
        {/* {pokemon !== undefined && (
          <Button variant="contained" onClick={() => history.push("/")}>
            back to pokedex
          </Button>
        )}     */}
    </Card>    
  );
};

export default Pokemon;
