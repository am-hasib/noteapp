import { createSlice } from "@reduxjs/toolkit";

const initialState: Notes = {
  notes: [],
};
const noteSlice = createSlice({
  name: "noteSlice",
  initialState,
  reducers: {
    createNote: () => {},
  },
});

export default noteSlice.reducer;

export const { createNote } = noteSlice.actions;
