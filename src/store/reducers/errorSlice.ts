import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ErrorState {
    status: boolean,
    errorMessage: string | null
}

const initialState: ErrorState = {
    status: false,
    errorMessage: null
}

const errorSlice = createSlice({
    name: 'error',
    initialState,
    reducers: {
        showErrorAlert: (state, action: PayloadAction<string>) => {
            state.status = true;
            state.errorMessage = action.payload;
        },
        hideErrorAlert: (state) => {
            state.status = false;
            state.errorMessage = null;
        }
    }
})

export const { showErrorAlert, hideErrorAlert } = errorSlice.actions;
export default errorSlice.reducer;