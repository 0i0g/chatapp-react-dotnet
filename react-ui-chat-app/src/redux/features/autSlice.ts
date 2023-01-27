import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AuthUser} from "../../@type/authType";
import {AuthService} from "../../services/authService";

interface State {
  authUser?: AuthUser;
  error?: string;
}

const initialState: State = {
  authUser: undefined,
  error: undefined,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ username: string, password: string }>) => {
      const {username, password} = action.payload;
      AuthService.login(username, password);
    }
  }
});

export const {} = authSlice.actions;

export default authSlice.reducer;
