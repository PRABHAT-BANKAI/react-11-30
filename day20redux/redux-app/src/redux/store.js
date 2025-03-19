// step 1 create store

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/features/counterSlice"
export const store = configureStore({
  reducer: {
    counter: counterReducer, // register counter reducer in the store
  },
});
