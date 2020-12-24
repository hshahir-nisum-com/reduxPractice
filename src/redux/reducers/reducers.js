
import { type } from "../actions/typesOfActions";


function nextTodoId(todos) {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
    return maxId + 1
  }
  const initialState = {
    todos: [
      { id: 0, text: 'Hi Redux You are curse', edit:false }
    
    ]
}  
const deleteItem = (key,arr) =>{
  console.log("dlt todo",arr)
  const filteredItems= arr.filter(item =>
    item.id !==key);
    console.log("dlt item",filteredItems)
    return (filteredItems)
    
}



const editItem = (mykey,arr) =>{
  let cpy  = [...arr]
  console.log("edit todo",cpy)
  const filteredItems= cpy.map((key) =>{
    console.log(key.id)
    if (key.id === mykey){
      key.edit = true
    }
    return key
  });
    console.log("edit item",filteredItems)

    return filteredItems
    
}


const updatedItem = (mykey,arr) =>{
  const {id, text} = mykey
  let cpy  = [...arr]
  console.log("edit todo",cpy)
  const filteredItems= cpy.map((key) =>{
    console.log(key.id)
    if (key.id === id){
      key.text = text
      key.edit = false
    }
    return key
  });
    console.log("edited item",filteredItems)

    return filteredItems
    
}





const changing = (mykey,arr) =>{
  const {id, text} = mykey
  let cpy  = [...arr]
  console.log("edit todo",cpy)
  const filteredItems= cpy.map((key) =>{
    console.log(key.id)
    if (key.id === id){
      key.text = text
    }
    return key
  });
    console.log("chanign item",filteredItems)

    return filteredItems
    
}


 export   const reducer = (state=initialState, action) => {
   switch (action.type) {
     case type.add: {
       console.log("reducer :",action)
       return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: nextTodoId(state.todos),
            text: action.payLoad,
            edit : false,
          }
        ]
      
     }
    }
    
    case type.delete : {
      return  {
        ...state,
         todos: deleteItem(action.payLoad,state.todos),
         edit : false,
      }
    }

    case type.edit :{
      return {
        ...state,  
        todos :[
          ...editItem(action.payLoad,state.todos)
        ]
      }
    }

    case type.update :{
      console.log("in updated vals")
      return {
        ...state,  
        todos :[
          ...updatedItem(action.payLoad,state.todos)
        ]
      }
    }

    case type.change : {
      console.log("value is changing ")
      return{
        ...state,
        todos : [
          ...changing(action.payLoad,state.todos)
        ]
      }
    }
     
     default:
       return state;
   }
 };