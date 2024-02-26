import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  favories: [],
};



const favorieSlice = createSlice({
  name: "favories",
  initialState,
  reducers: {
    toggleFavourite: (state, action) => {
      const index = state.favories.indexOf(action.payload)
      if (index !== -1) {
          state.favories.splice(index, 1)
      } else {
          state.favories.push(action.payload)
      }
  },
  },
  
});

export const { toggleFavourite } = favorieSlice.actions;
export default favorieSlice.reducer;
