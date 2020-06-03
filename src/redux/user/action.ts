import { createAsyncThunk } from '@reduxjs/toolkit';
import { requestUser } from '@api';

export const fetchUser = createAsyncThunk('user/fetchUser', async (id: number, thunkApi) => {
  const response = await requestUser(id);
  return response;
});
