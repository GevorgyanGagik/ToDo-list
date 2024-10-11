import { createSlice } from "@reduxjs/toolkit";
import { fetchChangeMode, fetchMode } from "../nightSlice/API";

const nightSlice = createSlice({
  name: "night",
  initialState: false,
  extraReducers: (builder) => {
    builder
      .addCase(fetchMode.fulfilled, (state, { payload }) => {
        return payload;
      })
      .addCase(fetchChangeMode.fulfilled, (state, { payload }) => {
        return !payload;
      });
  },
});

export const nightReducer = nightSlice.reducer;
export const selectNight = (state) => state.night;
