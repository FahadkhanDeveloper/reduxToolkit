import { createSlice } from '@reduxjs/toolkit';
// it is for create actions
import { clearAllUsers } from '../actions';
const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        addUser(state, action) {
            // bydefalult immer is used so object will be immutable means original will no be changed
            state.push(action.payload)
            // console.log(action.payload);
        },
        removeUser(state, action) {
            // console.log("hi " + action.payload)
            // this means from this index , delete 1 data  means delete that index data
            state.splice(action.payload,1)
        },

        // clearAllUsers(state, action) {
        //     // console.log("hi delete")
        //     // here we assign new empty array to state which is not good
        //     // return state = [];

        //     // here we delete data from state   bydefault it return state
        //     return []   
        // },

        // extraReducers is used when you handle multiple reducers like  user admin and it can be access from 
        // both components
        // extraReducer means micro reducer which you need in mutiple slices like user admin then we use extraReducer
    //  below code will not run above will run because both are same 

    // if you use without createAction then delte below curly brace and ,   means if you use clearAllUsers without
    // extra reducer then remove below line( }, )
    },
        extraReducers(builder){
            //  builder.addCase(userSlice.actions.clearAllUsers, () => {
            //     return []
            //  })

            // this for createActions
            builder.addCase(clearAllUsers, () => {
                console.log("hiii")
                return [];
            })
        
    }
})
// console.log(userSlice.actions);
export default userSlice.reducer
// export const { addUser,removeUser, clearAllUsers } = userSlice.actions;

// this is for action creator
export const { addUser,removeUser} = userSlice.actions;

// export const { removeUser } = userSlice.actions;
// export const { deleteUsers } = userSlice.actions;