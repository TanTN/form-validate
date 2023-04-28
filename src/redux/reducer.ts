import { CaseReducer, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FC } from "react";

export interface Slice {
    name:'string',
    initialStates: {
        users:[],
        isLogin: boolean,

    },
    reducers:{
        postUser:Function,
        login:Function
    }
    
}

interface State {
    users:[],
    isLogin: boolean,
    userCurrent:{}
}

const initialState:State = {
    users:[],
    isLogin: false,
    userCurrent:{}
}


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{

        postUserRedux:(state:{users:{}[],isLogin:boolean},action:{payload:{}}) => {
 
            state.users = [...state.users,action.payload]
        },
        getUserRedux:(state, action:PayloadAction<[]>) => {
            state.users = action.payload
        },
        loginSuccess:(state) => {
            state.isLogin = true
        },
        userLogin:(state:{userCurrent:{}},action:PayloadAction<{}>) => {
            state.userCurrent = action.payload
        },
        userLogout:(state) => {
            state.isLogin = false 
        },
    }
})

const {reducer, actions} = userSlice
export const {postUserRedux,getUserRedux,loginSuccess,userLogin,userLogout} = actions
export default reducer