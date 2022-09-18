import {createSlice} from '@reduxjs/toolkit'

const adminSlice=createSlice({
    name:'AdminSignin',
    initialState:{AdminStatus:false},
    
    reducers:{
        adminSignin:(state,action)=>{
            state.AdminStatus= true
<<<<<<< HEAD
            // console.log("Inside admin slice "+state.AdminStatus)
            // console.log("inside admin Slice "+action.payload)
=======
            console.log("Inside admin slice "+state.AdminStatus)
            console.log("inside admin Slice "+action.payload)
>>>>>>> d13a0575b95b67b281933dca66837d78c533137a
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