import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [
    { name: 'Bernard', email: 'bernard@gmail.com', gen: 24, id: '988o7' },
    { name: 'Credo', email: 'credo@gmail.com', gen: 24, id: '988o71z' },
  ],
};
const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addNewUser: (state, action) => {
      state.users = [...state.users, action.payload];
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((item) => {
        if (item.id !== action.payload) {
          return item;
        }
      });
    },
    editUser: (state, action) => {
      state.users = state.users.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload.updatedUser;
        }
        return item;
      });
    },
  },
});
export const { addNewUser, deleteUser, editUser } = userSlice.actions;
export default userSlice.reducer;
