import { configureStore } from "@reduxjs/toolkit";
import matchesReducer from "./features/matchesSlice";




const store = configureStore({
  reducer: {
    matches : matchesReducer,
  },
  
});


export default store;
