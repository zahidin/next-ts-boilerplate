import './style.scss';
import Welcome from './fragments/welcome';
import ListPokemon from './fragments/listPokemon';
import { icons } from '@assets/index';
import FormPokemon from './fragments/formPokemon';

function HomePage() {
  const { LogoDesktop } = icons;

  return (
    <div className="home">
      <img src={LogoDesktop} height="50" width="50" />
      <Welcome />
      <FormPokemon />
      <div className="mt-3">
        <ListPokemon />
      </div>
    </div>
  );
}

export default HomePage;
