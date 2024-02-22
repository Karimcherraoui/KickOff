import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import matchesReducer from "./features/matchesSlice";
import leaguesReducer from "./features/leagueSlice";

const middleware = [...getDefaultMiddleware({
  serializableCheck: false, 
})];

const store = configureStore({
  reducer: {
    Matches: matchesReducer,
    Leagues: leaguesReducer,
  },
  middleware,

});

export default store;
