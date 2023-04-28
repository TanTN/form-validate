import axios from "axios";
import { getUserRedux } from "../reducer";

export interface DataPost {
    email: string,
    password:string,
    nameUser:string
}

// const httpRequest = axios.create({
//     baseURL:process.env.REACT_APP_BASE_URL
// })

const getUser = async (dispatch:any) => {
    const add = await axios.get('https://server-login-cicb.onrender.com/register')
    console.log(add.data)
    return dispatch(getUserRedux(add.data))
}
const postUser = async (data:DataPost) => {
    const res = await axios.post('https://server-login-cicb.onrender.com/register',data)
}


export {postUser,getUser}