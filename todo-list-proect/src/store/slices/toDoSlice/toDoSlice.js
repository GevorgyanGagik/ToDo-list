import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAddToDo,
  fetchChangeComp,
  fetchChangeTitle,
  fetchClearAll,
  fetchClearComp,
  fetchDeleteItem,
  fetchToDos,
} from "./API";

const toDoSlice = createSlice({
  name: "toDos",
  initialState: [],
  reducers: {
    changeEdit(state, { payload }) {
      return state.map((el) =>
        el.id === payload.id ? { ...el, isEdit: !el.isEdit } : el
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchToDos.fulfilled, (state, { payload }) => {
        return payload;
      })
      .addCase(fetchAddToDo.fulfilled, (state, { payload }) => {
        return [...state, payload];
      })
      .addCase(fetchChangeComp.fulfilled, (state, { payload }) => {
        return state.map((el) =>
          el.id === payload.id ? { ...el, isComp: !el.isComp } : el
        );
      })
      .addCase(fetchDeleteItem.fulfilled, (state, { payload }) => {
        return state.filter((el) => el.id !== payload);
      })
      .addCase(fetchChangeTitle.fulfilled, (state, { payload }) => {
        return state.map((elem) =>
          elem.id === payload.item.id
            ? { ...elem, isComp: false, isEdit: false, text: payload.newText }
            : elem
        );
      })
      .addCase(fetchClearAll.fulfilled, (state) => {
        return [];
      })
      .addCase(fetchClearComp.fulfilled, (state, { payload }) => {
        return payload;
      });
  },
});

export const toDosReducer = toDoSlice.reducer;
export const selectToDos = (state) => state.toDos;
export const { changeEdit } = toDoSlice.actions;
