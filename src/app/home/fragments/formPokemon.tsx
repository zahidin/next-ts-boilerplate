import { useDispatch } from 'react-redux';
import { Form, Field } from 'react-final-form';
import { addingPokemon } from '@redux/pokemon/action';
export default function FormPokemon() {
  const required = (value: string) => (value ? undefined : 'Required');
  const dispatch = useDispatch();
  const handleSubmit = (data) => {
    dispatch(addingPokemon(data));
  };
  return (
    <Form
      onSubmit={handleSubmit}
      validate={(values) => {
        return {
          name: values.name ? undefined : 'Required',
          url: values.url ? undefined : 'Required',
        };
      }}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <Field name="name" type="text" placeholder="girafarig" validate={required}>
            {({ input, meta }) => (
              <div>
                <label>Name</label>
                <br />
                <input {...input} type="text" placeholder="girafarig" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="url" type="text" placeholder="https://pokeapi.co/api/v2/pokemon/201/">
            {({ input, meta }) => (
              <div>
                <label>url</label>
                <br />
                <input
                  {...input}
                  type="text"
                  placeholder="https://pokeapi.co/api/v2/pokemon/201/"
                />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <button className="mr-3 mt-2" type="submit" disabled={submitting || pristine}>
            Submit
          </button>
          <button
            className=" mt-2"
            type="button"
            onClick={form.reset}
            disabled={submitting || pristine}
          >
            Reset
          </button>
        </form>
      )}
    />
  );
}
