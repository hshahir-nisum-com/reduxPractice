import { type } from "./typesOfActions";

export const add = (text)=>{
    console.log("add action",text)
    return {
        type : type.add,
        payLoad : text
        
    }   
}

export const dlt = (id)=>{
    console.log( "delete action",id)
    return {
        type : type.delete,
        payLoad :id
    }   
}

export const editable = (id)=>{
    console.log( "edit action",id)
    return {
        type : type.edit,
        payLoad :id
    }   
}
export const updatedText = (id,text)=>{
    console.log( "edit action",id)
    return {
        type : type.update,
        payLoad :{
            id : id,
            text : text
        }
    }   
}
export const change = (e,id,text)=>{
    console.log("onChange",text)
    console.log( "change action",text)
    return {
        type : type.change,
        payLoad : {
            id : id,
            text : text
        }
    }   
}