import { createSlice } from "@reduxjs/toolkit";
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
const userSlice = createSlice({
    name: 'user',
    initialState:{
        users:[],
        isLogin: false,
        userCurrent:{}
    },
    reducers:{

        postUserRedux:(state:{users:{}[],isLogin:boolean},action:{payload:{}}) => {
 
            state.users = [...state.users,action.payload]
        },
        getUserRedux:(state:{users:[],isLogin:boolean},action:{payload:[]}) => {
            state.users = action.payload
        },
        loginSuccess:(state:{users:[],isLogin:boolean}) => {
            state.isLogin = true
        },
        userLogin:(state:{userCurrent:{}},action:{payload:{}}) => {
            state.userCurrent = action.payload
        },
        userLogout:(state:{users:[],isLogin:boolean}) => {
            state.isLogin = false
        },
    }
})

const {reducer, actions} = userSlice
export const {postUserRedux,getUserRedux,loginSuccess,userLogin,userLogout} = actions
export default reducer