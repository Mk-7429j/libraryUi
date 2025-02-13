import { configureStore, combineReducers } from "@reduxjs/toolkit";
import role_slice from "./role_slice";

const allSlices = combineReducers({
  role: role_slice,
});

const store = configureStore({
  reducer: allSlices,
});

export default store;
