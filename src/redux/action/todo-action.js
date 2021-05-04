export function addTodoList(message){
  console.log("Action ---> ", message)
  return {
    type : "ADD_NEW_TODO_MESSAGE",
    value : message
  }
}

export function deleteTodoList(){
  return {
    type : "REMOVE_TODO_MESSAGE",
    value : 2
  }
}