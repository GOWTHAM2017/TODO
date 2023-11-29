import { useSelector } from "react-redux"
import Todo from "./todo"

function TodoList(){
    const data=useSelector((state) => state.todos)
    return(
        <ul className="list-group mt-4">
        {data.map((todo) =>(
             <Todo key={todo.id} id={todo.id} title={todo.title}></Todo>
        ))}
        </ul>
    )
  
}
export default TodoList