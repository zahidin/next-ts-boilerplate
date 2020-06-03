/*
    MODEL
*/
export type ApiModel<T> = {
  results: T;
};
export type PokemonModel = {
  name: string;
  url: string;
};

export interface UserModel {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Geo {
  lat: string;
  lng: string;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

/*
    END MODEL
*/

export type HomeProps = React.HTMLAttributes<ReactHTMLElement>;
