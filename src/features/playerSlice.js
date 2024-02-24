import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  players: [],
  status: "idle",
  error: null,
};

export const fetchPlayer = createAsyncThunk(
  "players/fetchPlayer",
  async ( thunkAPI) => {
    try {
      const response = await fetch(
        `https://www.footballtransfers.com/en/players/actions/overview/overview`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch matches");
      }
      
      const data = await response.json();
      return data.records;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);
const playerSlice = createSlice({
  name: "players",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlayer.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchPlayer.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.players = action.payload;
      })
      .addCase(fetchPlayer.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.error;
      })
     
  },
});
export const { clearMatch } = playerSlice.actions;

export default playerSlice.reducer;
