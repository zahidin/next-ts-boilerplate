import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PokemonModel, ApiModel } from '@type';
import { fetchPokemon, addingPokemon } from './action';

const pokemonSlicer = createSlice({
  name: 'pokemon',
  initialState: {
    pokemon: [] as PokemonModel[],
    isLoading: false as boolean,
    isError: false as boolean,
  },
  reducers: {
    addDataPokemon: (state, action) => {
      state.pokemon.unshift(action.payload);
    },
  },
  extraReducers: {
    [fetchPokemon.pending.type]: (state, action: PayloadAction<boolean>) => {
      state.isLoading = true;
      state.isError = false;
    },
    [fetchPokemon.fulfilled.type]: (state, action: PayloadAction<ApiModel<PokemonModel[]>>) => {
      state.isLoading = false;
      state.pokemon = action.payload.results;
      state.isError = false;
    },
    [fetchPokemon.rejected.type]: (state, action: PayloadAction<boolean>) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const { addDataPokemon } = pokemonSlicer.actions;
export default pokemonSlicer.reducer;
