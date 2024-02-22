import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  matches: [],
  status: "idle",
  error: null,
};

export const fetchMatches = createAsyncThunk(
  "matches/fetchMatches",
  async (date, thunkAPI) => {
    try {
      const response = await fetch(
        `https://api.sofascore.com/api/v1/sport/football/scheduled-events/${date}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch matches");
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);
const matchesSlice = createSlice({
  name: "matches",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMatches.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchMatches.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.matches = action.payload;
      
      })
      .addCase(fetchMatches.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.error;
      });
  },
});
export const { logMatches } = matchesSlice.actions;

export default matchesSlice.reducer;
