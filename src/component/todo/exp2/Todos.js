import { useState } from "react"
import TodoList from "./TodoList"
import Todo from "./Todo"

const Todos = () => {
    const [todos, setTodos] = useState([{ id: 1 }, { id: 2 }])

    const toggleTodo = () => {
        console.log('toggleTodo called')
    }

    return (
        <div>
            <h3>
                Inside Todos
                <form>
                    <input type="text" placeholder="type todo" />
                    <TodoList>
                        {
                            todos.map((todo, index) => <Todo key={index} toggleTodo={toggleTodo} todo={todo}/>)
                        }
                    </TodoList>
                </form>
            </h3>
        </div>
    )
}

export default Todos