import { configureStore } from "@reduxjs/toolkit";
import { toDosReducer } from "./slices/toDoSlice/toDoSlice";
import { searchReducer } from "./slices/searchSlice/searchSlice";
import { nightReducer } from "./slices/nightSlice/nightSlice";

const store = configureStore({
  reducer: {
    toDos: toDosReducer,
    search: searchReducer,
    night: nightReducer,
  },
});

export default store;
