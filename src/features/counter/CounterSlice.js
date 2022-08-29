import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state, action) => {
      state.value += action.payload;
    },
    decreaseFive: (state, action) => {
      if (state.value <= 4) {
        window.alert("Cannot implement click, result is in negative");
      } else {
        state.value -= action.payload;
      }
    },
    reset: (state, action) => {
      state.value = action.payload;
    },
    increaseFive: (state, action) => {
      state.value += action.payload;
    },
    decrement: (state, action) => {
      if (state.value <= 1) {
        window.alert("Cannot implement click, result is in negative");
      } else {
        state.value -= action.payload;
      }
    },
  },
});

export const { increment, decreaseFive, reset, decrement, increaseFive } =
  counterSlice.actions;

export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer;
