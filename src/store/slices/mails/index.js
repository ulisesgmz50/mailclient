import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const mailsSlice = createSlice ({
    name: "mails",
    initialState: {
        list:[],
    },
    reducers: {
        setMails:(state, action)=>{
            state.list = action.payload;
        }
        },
});

export const {setMails} =mailsSlice.actions;
export default mailsSlice.reducer;

export const fetchMails=()=>(dispatch)=>{
    axios
    .get("json/mail-data.json")
    .then((response)=>{
        dispatch(setMails(response.data));
    })
    .catch((error)=>console.log(error));
};
