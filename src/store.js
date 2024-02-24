import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import matchesReducer from "./features/matchesSlice";
import leaguesReducer from "./features/leagueSlice";
import playerReducer from "./features/playerSlice";

const middleware = [...getDefaultMiddleware({
  serializableCheck: false, 
})];

const store = configureStore({
  reducer: {
    Matches: matchesReducer,
    Leagues: leaguesReducer,
    Players: playerReducer,
  },
  middleware,

});

export default store;
