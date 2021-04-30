export function addTodoList(){
  return {
    type : "ADD_NEW_TODO_MESSAGE",
    value : 'React JS'
  }
}

export function deleteTodoList(){
  return {
    type : "REMOVE_TODO_MESSAGE",
    value : 2
  }
}