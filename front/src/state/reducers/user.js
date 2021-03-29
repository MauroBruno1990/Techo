import { createAction, createReducer, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

//export const setUser = createAction('SET_USER')

// export const postData = createAsyncThunk('SET_USER', () => { 
//     //axios.post
// })


const userReducer = createReducer([], {
    [setUser]: (state, action) => action.payload
})

export default userReducer