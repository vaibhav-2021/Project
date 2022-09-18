import {createSlice} from '@reduxjs/toolkit'

const adminSlice=createSlice({
    name:'AdminSignin',
    initialState:{AdminStatus:false},
    
    reducers:{
        adminSignin:(state,action)=>{
            state.AdminStatus= true
            console.log("Inside admin slice "+state.AdminStatus)
            console.log("inside admin Slice "+action.payload)
            sessionStorage.token="Admin"

        },

        adminSignout:(state,action)=>{
            state.AdminStatus=false
            sessionStorage.removeItem('token')
        }
    }
})

export const{adminSignin,adminSignout}=adminSlice.actions

export default adminSlice.reducer