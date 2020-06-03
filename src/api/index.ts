import { PokemonModel } from '@type';

const fetchApi = (url: string, method: string, headers?: HeadersInit, body?: BodyInit) => {
  const requestOption: RequestInit = {
    method,
    headers,
    body,
  };

  return new Promise(async (resolve, reject) => {
    try {
      const request = await fetch(url, requestOption);
      const result = request && (await request.json());
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

export const requestPokemon = async () =>
  await fetchApi(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=200`, 'GET');

export const requestUser = async (id: number) =>
  await fetchApi(`https://jsonplaceholder.typicode.com/users/${id}`, 'GET');

export const addPokemon = async (data: PokemonModel) =>
  await fetchApi(
    `http://www.mocky.io/v2/5ed7c52d3200003def274c25`,
    'POST',
    { 'Content-type': 'application/json; charset=UTF-8' },
    JSON.stringify(data)
  );
