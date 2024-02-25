import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  favories: [],
  status: "idle",
  error: null,
};

export const fetchFavories= createAsyncThunk(
  "favories/fetchFavories",
  async (matchID, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://api.sofascore.com/api/v1/event/${matchID}`
      );
      if (response.status >= 200 && response.status < 300) {
        return response.data.event;
      } else {
        throw new Error("Failed to fetch matches");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const favorieSlice = createSlice({
  name: "favories",
  initialState,
  reducers: {
    removeFavorie: (state, action) => {
      state.favories = state.favories.filter((item) => item.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavories.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchFavories.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.favories = action.payload;
      })
      .addCase(fetchFavories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload ? action.payload.error : "Unknown error";
      });
  },
});

export const { removeFavorie } = favorieSlice.actions;
export default favorieSlice.reducer;
