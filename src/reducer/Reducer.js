import { SETNAME,SETEMAIL } from "../actions/actionTypes";
let initialState={name:"",email:""}
export default function Reducer(state=initialState,actions){
    switch (actions.type) {
        case SETNAME:
            return {...state,name:actions.name};
        case SETEMAIL:
            return {...state,email:actions.email};
        default:
            return state;
    }
}