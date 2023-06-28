import { SETNAME,SETEMAIL } from "./actionTypes";
export const setName=(name)=>{
    return{
        type:SETNAME,
        name:name
    }
}
export const setEmail=(email)=>{
    return{
        type:SETEMAIL,
        email:email
    }
}