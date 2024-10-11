import { createAsyncThunk } from "@reduxjs/toolkit";

const MODE_LINK = "http://localhost:3005/night";

export const fetchMode = createAsyncThunk("night/fetchMode", async () => {
  const getMode = await fetch(MODE_LINK);
  const res = await getMode.json();

  return res.nightT;
});

export const fetchChangeMode = createAsyncThunk(
  "night/fetchChangeMode",
  async (state) => {
    const putItem = await fetch(MODE_LINK, {
      method: "PUT",
      body: JSON.stringify({ nightT: !state }),
    });

    return state;
  }
);
