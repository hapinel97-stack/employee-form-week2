import { createSlice, nanoid } from "@reduxjs/toolkit";

const STORAGE_KEY = "employees";

// Load/save helpers for localStorage
const load = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = JSON.parse(raw ?? "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};
const save = (list) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  } catch {}
};

const initialState = { list: load() };

const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployee: {
      reducer(state, action) {
        state.list.push(action.payload);
        save(state.list);
      },
      prepare(data) {
        return { payload: { id: nanoid(), ...data } };
      },
    },
    removeEmployee(state, action) {
      state.list = state.list.filter((e) => e.id !== action.payload);
      save(state.list);
    },
    clearAll(state) {
      state.list = [];
      save(state.list);
    },
  },
});

export const { addEmployee, removeEmployee, clearAll } = employeeSlice.actions;
export default employeeSlice.reducer;