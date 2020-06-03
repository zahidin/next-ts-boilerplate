import { getDefaultMiddleware, configureStore } from '@reduxjs/toolkit';
import rootReducer, { RootReducer } from './reducers';

export const configStore = () => {
  const middleware = [];
  const configure = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware<RootReducer>(), ...middleware],
  });
  return configure;
};
