//state manager
//list all properties
//count
//search filters,
//loading flag
//error

import { createSlice } from "@reduxjs/toolkit";

const propertySlice = createSlice({
    name : "property",
    initialState:{
        properties:[],
        totalProperties:0,
        SearchParams:{},
        error:null,
        loading: false
    },
    reducers:{
        getRequest(state){
            state.loading = true;
        },
        getProperties(state,action){
            state.properties = action.payload.data;
            state.totalProperties = action.payload.all_properties;
            state.loading = false; //req finished => hide loader
        },
        updateSearchParams:(state,action)=>{
            state.searchParams=Object.keys(action.payload).length===0 ?{}:{
                ...state.searchParams,
                ...action.payload
            }
        },

        getError(state,action){
            state.error = action.payload
        }
    }

})
export const propertyAction = propertySlice.actions
export default propertySlice;
