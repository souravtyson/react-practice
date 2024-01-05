import Todo from "./Todo";

const TodoList = ({ todos, toggleTodo }) => {
    return (
        <div>
            <h4>
                Inside TodoList
                <ul>
                    {
                        todos.map((todo, index) => <Todo key={index} todo={todo} toggleTodo={toggleTodo}/>)
                    }
                </ul>
            </h4>
        </div>
    )
}

export default TodoList;