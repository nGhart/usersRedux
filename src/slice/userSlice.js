import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    users: [],
}
const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addNewUser: (state, action) => {
            state.users = [...state.users, action.payload]
        },
        deleteUser: () => { },
        editUser: () => { }
    }
})
export const {addNewUser, deleteUser, editUser}=userSlice.actions;
export default userSlice.reducer;
