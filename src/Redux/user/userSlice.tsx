import {createSlice} from '@reduxjs/toolkit' 

const INITIAL_STATE ={
    username : "",
    email  : "",
    // orgId :''

}

const userSlice = createSlice({
    name : "user",
    initialState : INITIAL_STATE,
    reducers:{
     userLogged : (state ,action)=>{
        state.username = action.payload.username
        state.email = action.payload.email
        // state.orgId = action.payload.id 
     },
    //  userLogout : (state)=>{
    //     Object.assign(state,INITIAL_STATE)
    //  }
    }
})

export const {userLogged} = userSlice.actions
// export const  {userLogout} = userSlice.actions
export default userSlice.reducer