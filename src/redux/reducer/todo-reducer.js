const initalState = {   
  todoList : []
}
export default function todoReducer(state = initalState, action){
  console.log("Reducer --> ", action)

  switch(action.type){
    case "ADD_NEW_TODO_MESSAGE":
      return {...state,  todoList : [ ...state.todoList, action.value]}
    case "REMOVE_TODO_MESSAGE":
      return state 
    default:
      return state
  }
}