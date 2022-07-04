import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import loginReducer from "./login";

const store = configureStore({
  reducer: {
    Login: loginReducer,
  },
  middleware: getDefaultMiddleware => 
  getDefaultMiddleware({
    serializableCheck: false
  })
});

export default store;
