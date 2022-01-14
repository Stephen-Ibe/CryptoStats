import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../models/User";
import { RootState } from "../store";

interface AuthState {
  user?: User;
}

const slice = createSlice({
  name: "auth",
  initialState: {} as AuthState,
  reducers: {
    setAuthState: (state, { payload: { user } }: PayloadAction<AuthState>) => {
      state.user = user;
    },
  },
});

export const selectCurrentUser = (state: RootState) => state.auth.user;

export const { setAuthState } = slice.actions;
export default slice.reducer;
