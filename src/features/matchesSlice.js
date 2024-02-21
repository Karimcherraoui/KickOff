import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  matches: [],
};

export const fetchMatchData = createAsyncThunk(
  'matches/fetchMatchData',
  async () => {
    try {
      const apiKey = 'UTm0sjKAIAdjbKbuQ4147EtMg802CezWpTH7yyAyl40F3touVZT4aTmhacCa'; 
      const response = await fetch('https://api.sportmonks.com/v3/football/fixtures', {
        headers: {
          'Authorization': `${apiKey}`
        }
      });
      const data = await response.json();
      return data;
    } catch (error) {
      throw Error('Failed to fetch match data');
    }
  }
);

const matchesSlice = createSlice({
  name: "matches",
  initialState,
  reducers: {
    logMatches: (state) => {
      console.log(state.matches);
    },
    clearMatches: (state) => {
      state.matches = []; 
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMatchData.fulfilled, (state, action) => {
        state.matches = action.payload;
      });
  },
});

export const { logMatches, clearMatches } = matchesSlice.actions;

export default matchesSlice.reducer;
