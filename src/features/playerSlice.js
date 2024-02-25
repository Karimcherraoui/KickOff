import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  players: [],
  status: "idle",
  error: null,
};

export const fetchPlayer = createAsyncThunk(
  "players/fetchPlayer",
  async (_, thunkAPI) => { // Ajout du paramètre _
    try {
      const response = await axios.get(
        `https://www.footballtransfers.com/en/players/actions/overview/overview`
      );
      if (response.status >= 200 && response.status <= 299) { // Vérifier le code de statut HTTP
        return response.data.records;
      } else {
        throw new Error("Failed to fetch players");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const playerSlice = createSlice({
  name: "players",
  initialState,
  reducers: {},
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
        state.error = action.payload ? action.payload.error : "Unknown error";
      });
  },
});

export default playerSlice.reducer;
