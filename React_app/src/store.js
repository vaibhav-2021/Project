import {configureStore} from '@reduxjs/toolkit'
import customerSlice from './slice/customerSlice'
import adminSlice from './slice/adminSlice'

const store=configureStore({
    reducer:{
        customerSlice,
        adminSlice,
    }
})



export default store;