import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: { search: false, searchToDos: [] },
  reducers: {
    searchToDos(state, { payload }) {
      return {
        search: !state.search,
        searchToDos: payload,
      };
    },
    searchedToDos(state, { payload }) {
      return {
        ...state,
        searchToDos: payload.toDos.filter((el) =>
          el.text.includes(payload.title)
        ),
      };
    },
  },
});

export const searchReducer = searchSlice.reducer;
export const selectSearch = (state) => state.search;
export const { searchToDos, searchedToDos } = searchSlice.actions;
