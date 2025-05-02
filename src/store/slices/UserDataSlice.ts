import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from "@/store/store";

export interface UserDataState {
    userData?: any,
}

const initialState: UserDataState = {}

export const UserDataSlice = createSlice({
    name: 'UserDataSlice',
    initialState,
    reducers: {
        setUserDataAction: (state, action: PayloadAction<any>) => {
            state.userData = action.payload
        },
    }
})

export const {setUserDataAction} = UserDataSlice.actions
export const selectUserData = (state: RootState) => state.UserDataSliceReducer.userData
export const UserDataSliceReducer = UserDataSlice.reducer