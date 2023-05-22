import { type } from "os";

export type CreateUserparams = {
    username:string;
    password:string;
    email:string;
    address:string;
    comments:string;

 
}
export type CreateAccountparams = {
    username: string;
    email: string;
    password:string;

 
}

export type UpdateAccountparams = {
    username: string;
    email: string;
    password:string;

 
}



export type UpdateUserparams = {
    username:string;
    password:string;
    email:string;
    address:string;
    comments:string;
 
}


export type CreateTherapistSessionparams = {
    username: string;
    duratition: string,
}
export type UpdateTherapistSessionparams = {
    username:string;
    duration:string;
}

