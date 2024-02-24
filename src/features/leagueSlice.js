import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  leagues: [],
  status: "idle",
  error: null,
};

export const fetchLeagues = createAsyncThunk(
  "leagues/fetchLeagues",
  async ( thunkAPI) => {
    try {
      const response = await fetch(
        `https://api.sofascore.com/api/v1/config/top-unique-tournaments/MA/football`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch Leagues");
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);
const leaguesSlice = createSlice({
  name: "leagues",
  initialState,
  reducers: {
  },
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
        state.error = action.payload.error;
      });
  },
});

export default leaguesSlice.reducer;
