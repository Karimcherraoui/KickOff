import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  leagues: [],
  status: "idle",
  error: null,
};

export const fetchLeagues = createAsyncThunk(
  "leagues/fetchLeagues",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://api.sofascore.com/api/v1/config/top-unique-tournaments/MA/football`
      );
      if (response.status >= 200 && response.status < 300) {
        // Si le code de statut est dans la plage 200, cela signifie que la requête a réussi
        return response.data;
      } else {
        throw new Error("Failed to fetch leagues");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const leaguesSlice = createSlice({
  name: "leagues",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLeagues.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchLeagues.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.leagues = action.payload;
      })
      .addCase(fetchLeagues.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload ? action.payload.error : "Unknown error";
      });
  },
});

export default leaguesSlice.reducer;
