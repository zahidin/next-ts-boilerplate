import { createAsyncThunk } from '@reduxjs/toolkit';
import { requestPokemon, addPokemon } from '@api';
import { PokemonModel } from '@type';
import { addDataPokemon } from './slicer';

export const fetchPokemon = createAsyncThunk('pokemon/fetchPokemon', async () => {
  const response = await requestPokemon();
  return response;
});

export const addingPokemon = createAsyncThunk(
  'pokemon/addingPokemon',
  async (data: PokemonModel, { dispatch }) => {
    const response = await addPokemon(data);
    dispatch(addDataPokemon(data));
    return response;
  }
);
