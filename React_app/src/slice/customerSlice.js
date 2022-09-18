import {createSlice} from '@reduxjs/toolkit'

const customerSlice=createSlice({
    name:'CustomerSignin',
    initialState:{CustStatus:false},
    
    reducers:{
        custSignin:(state,action)=>{
            state.CustStatus= true
<<<<<<< HEAD
            // console.log("Inside cust "+state.CustStatus)
            // console.log("inside cust Slice "+action.payload)
=======
            console.log("Inside cust "+state.CustStatus)
            console.log("inside cust Slice "+action.payload)
>>>>>>> d13a0575b95b67b281933dca66837d78c533137a
            sessionStorage.token=action.payload
        },

        custSignout:(state,action)=>{
            state.CustStatus=false
            sessionStorage.removeItem('token')
        }
    }
})

export const{custSignin,custSignout}=customerSlice.actions

export default customerSlice.reducer