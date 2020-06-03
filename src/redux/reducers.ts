import { combineReducers } from '@reduxjs/toolkit';
import pokemon from './pokemon/slicer';
import user from './user/slicer';

const rootReducer = combineReducers({ pokemon, user });

export default rootReducer;
export type RootReducer = ReturnType<typeof rootReducer>;
