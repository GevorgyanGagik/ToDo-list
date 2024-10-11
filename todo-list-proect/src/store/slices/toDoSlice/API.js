import { createAsyncThunk } from "@reduxjs/toolkit";

const REQ_LINK = "http://localhost:3005/toDos";

export const fetchToDos = createAsyncThunk("toDos/fetchToDos", async () => {
  const getItems = await fetch(REQ_LINK);
  const result = await getItems.json();

  return result;
});

export const fetchAddToDo = createAsyncThunk(
  "toDos/fetchAddToDo",
  async (text) => {
    let newItem = {
      id: new Date().getTime().toString(),
      text,
      isComp: false,
      isEdit: false,
    };

    let postItem = await fetch(REQ_LINK, {
      method: "POST",
      body: JSON.stringify(newItem),
    });

    return newItem;
  }
);

export const fetchChangeComp = createAsyncThunk(
  "toDos/fetchChangeComp",
  async (item) => {
    const patchitem = await fetch(REQ_LINK + "/" + item.id, {
      method: "PATCH",
      body: JSON.stringify({ isComp: !item.isComp }),
    });

    return item;
  }
);

export const fetchDeleteItem = createAsyncThunk(
  "toDos/fetchDeleteItem",
  async (id) => {
    let delItem = await fetch(REQ_LINK + "/" + id, {
      method: "DELETE",
    });

    return id;
  }
);

export const fetchChangeTitle = createAsyncThunk(
  "toDos/fetchChangeTitle",
  async ({ item, newText }) => {
    let putText = await fetch(REQ_LINK + "/" + item.id, {
      method: "PUT",
      body: JSON.stringify({
        ...item,
        isComp: false,
        isEdit: false,
        text: newText,
      }),
    });

    return { item, newText };
  }
);

export const fetchClearAll = createAsyncThunk(
  "toDos/fetchClearAll",
  async (toDos) => {
    for (let i = 0; i < toDos.length; i++) {
      let del = await fetch(REQ_LINK + "/" + toDos[i].id, {
        method: "DELETE",
      });
    }
    return toDos;
  }
);

export const fetchClearComp = createAsyncThunk(
  "toDos/fetchClearComp",
  async (state) => {
    const filter = state.filter((el) => !el.isComp);
    for (let i = 0; i < state.length; i++) {
      if (state[i].isComp) {
        let del = await fetch(REQ_LINK + "/" + state[i].id, {
          method: "DELETE",
        });
      }
    }
    return filter;
  }
);
