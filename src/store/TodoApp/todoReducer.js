import { ADD_TODO, 
    COMPLETE_TODO, 
    DELETE_TODO, 
    UPDATED_TODO } from "./todo.action.type";

    import axios from "axios";

    const data =()=>{
      axios.get("http://localhost:8080/todos")
      .then((r)=>{
          let temp=r;
          console.log(temp.data)
          return r.data
      })
      
     
  };
  const intial = data()
  console.log(intial)
export const todoReducer =(state={todos:[]},{type,payload})=>{

    switch(type){
        case ADD_TODO:{
            // state.todos.push({
            //     ...payload,
            //     id:state.todos.length,
            // });
            return{...state,
                todos:[
                    ...state.todos,
                    {
                        ...payload,
                        id:state.todos.length
                    }
                ]
            };
        }
        case DELETE_TODO:{
            let New_list = state.todos.filter((e)=>e.id!==Number(payload))
            state.todos= New_list;
             return{...state}
        }
        case COMPLETE_TODO:{
            let current_Todo = state.todos.filter((e)=>e.id===Number(payload));
            console.log(current_Todo[0].value)
            //{<p >{current_Todo[0].value}</p>}
            
            return{...state};
        }
        case UPDATED_TODO:{
            let newTodos = state.todos.map(todo =>{
                if(todo.id === payload){
                    return payload;

                }
                else{
                    return todo;
                }
            })
            
            return{...state,todos:newTodos};
        }
        default :{
            return state;
        }
    }
}