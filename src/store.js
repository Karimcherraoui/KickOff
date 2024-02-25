import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import matchesReducer from "./features/matchesSlice";
import leaguesReducer from "./features/leagueSlice";
import playerReducer from "./features/playerSlice";
import favorieReducer from "./features/favorieSlice";

const middleware = [...getDefaultMiddleware({
  serializableCheck: false, 
})];

const store = configureStore({
  reducer: {
    Matches: matchesReducer,
    Leagues: leaguesReducer,
    Players: playerReducer,
    Favories: favorieReducer
  },
  middleware,

});

export default store;
