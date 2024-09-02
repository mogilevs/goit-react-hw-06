import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    setFilter(state, action) {
      return {
        ...state,
        items: state.items.filter((contact) =>
          contact.name.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
