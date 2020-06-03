import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserModel } from '@type';
import { fetchUser } from './action';

const userSlicer = createSlice({
  name: 'user',
  initialState: {
    user: [] as UserModel[],
    isLoading: false as boolean,
    isError: false as boolean,
  },
  reducers: {},
  extraReducers: {
    [fetchUser.pending.type]: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
      state.isError = false;
    },
    [fetchUser.fulfilled.type]: (state, action: PayloadAction<UserModel[]>) => {
      state.isLoading = false;
      state.user = action.payload;
      state.isError = false;
    },
    [fetchUser.rejected.type]: (state, action: PayloadAction<boolean>) => {
      state.isLoading = false;
      state.isError = action.payload;
    },
  },
});

export const {} = userSlicer.actions;
export default userSlicer.reducer;
