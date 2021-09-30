import { createSlice } from '@reduxjs/toolkit'

const inititialAuthState = {
    isAuthenticated: false
}

const authSlice = createSlice({
    name: 'authentication',
    initialState: inititialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    }
})

export const authAction = authSlice.actions;

export default authSlice.reducer;