import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  matches: [],
  players: [],
  oneMatche: null,
  status: "idle",
  error: null,
};

export const fetchMatches = createAsyncThunk(
  "matches/fetchMatches",
  async (date, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://api.sofascore.com/api/v1/sport/football/scheduled-events/${date}`
      );
      if (response.status >= 200 && response.status <= 299) {
        return response.data.events;
      } else {
        throw new Error("Failed to fetch matches");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const fetchOneMatche = createAsyncThunk(
  "matches/fetchOneMatche",
  async (matchID, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://api.sofascore.com/api/v1/event/${matchID}`
      );
      if (response.status >= 200 && response.status <= 299) {
        return response.data.event;
      } else {
        throw new Error("Failed to fetch match");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const fetchOnePlayer = createAsyncThunk(
  "players/fetchOnePlayer",
  async (matchID, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://api.sofascore.com/api/v1/event/${matchID}/incidents`
      );
      if (response.status >= 200 && response.status <= 299) {
        return response.data.incidents;
      } else {
        throw new Error("Failed to fetch player");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const matchesSlice = createSlice({
  name: "matches",
  initialState,
  reducers: {
    clearMatch: (state) => {
      state.oneMatche = null;
    },
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
        state.error = action.payload ? action.payload.error : "Unknown error";
      })
      .addCase(fetchOnePlayer.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchOnePlayer.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.players = action.payload;
      })
      .addCase(fetchOnePlayer.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload ? action.payload.error : "Unknown error";
      })
      .addCase(fetchOneMatche.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchOneMatche.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.oneMatche = action.payload;
      })
      .addCase(fetchOneMatche.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload ? action.payload.error : "Unknown error";
      });
  },
});
export const { clearMatch } = matchesSlice.actions;

export default matchesSlice.reducer;
