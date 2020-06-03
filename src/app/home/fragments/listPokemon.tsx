import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootReducer } from 'src/redux/reducers';
import { fetchPokemon } from '@redux/pokemon/action';

export default function ListPokemon() {
  const { pokemon, isLoading } = useSelector((state: RootReducer) => state.pokemon);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPokemon());
    // dispatch(fetchUser(1));
  }, [dispatch]);

  return (
    <table className="table is-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>Url</th>
        </tr>
      </thead>
      <tbody>
        {pokemon.map((val, index) => {
          return (
            <tr key={index}>
              <td>{val.name}</td>
              <td>{val.url}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
