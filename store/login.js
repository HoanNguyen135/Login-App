import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Login from "../services/login";
import "localstorage-polyfill";
import { decode, encode } from "base-64";
import { showNotice } from "../lib";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist'

if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}

export const fetchUser = createAsyncThunk(
  "login/fetchUser",
  async (data, thunkAPI) => {
    const response = await Login.login(data);
    return response.data;
  }
);

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    dataLogin: [
      {
        logging: false,
        isLoggedIn: false,
        currentUser: undefined,
      },
    ],
  },
  reducers: {
    logOut: (state, action) => {
      state.dataLogin[0].isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state, action) => {
        state.dataLogin[0].logging = true;
        state.dataLogin[0].isLoggedIn= false;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        showNotice(`Hello ${action.payload.user}`,'success','Login success');
        
        state.dataLogin = state.dataLogin.map((item) => {
          return {
            user: action.payload.user,
            logging: false,
            isLoggedIn: action.payload.authenticated
          };
        });
      })
      .addCase(fetchUser.rejected, (state, action) => {
        showNotice(`${action.error.message}`,'danger','Login Fail')
      });
  },
});

const persistConfig = {
  key: 'auth',
  storage: AsyncStorage
}

export const { logOut } = loginSlice.actions;
export default persistReducer(persistConfig,loginSlice.reducer);
