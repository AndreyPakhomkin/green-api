import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface UserState {
    phoneNumber: string | null,
    avatarUrl: string | null,
    deviceId: string | null
}

const initialState: UserState = {
    phoneNumber: null,
    avatarUrl: null,
    deviceId: null
}

interface UserPayload {
    phone: string,
    avatar: string,
    deviceId: string
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserPayload>) => {
            state.phoneNumber = action.payload.phone;
            state.avatarUrl = action.payload.avatar;
            state.deviceId = action.payload.deviceId;
        }
    }
})

export const { setUser } = userSlice.actions;
export default userSlice.reducer;