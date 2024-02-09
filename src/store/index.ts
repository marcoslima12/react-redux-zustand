import { configureStore, createSlice } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";

const todoSlice = createSlice({
  name: "todo",
  initialState: ["Fazer café", "Arrumar a casa"],
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    remove: (state, action) => {
      const itemToRemove = action.payload;
      return state.filter((item) => item !== itemToRemove);
    },
  },
});

export const { add, remove } = todoSlice.actions;

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const UseAppSelector: TypedUseSelectorHook<RootState> = useSelector;
