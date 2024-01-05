const Todo = ({todo, toggleTodo}) => {
    return (
        <div>
            <h5>
                Hello
                <li>
                    <input type="checkbox" id={todo.id} onChange={toggleTodo} checked={todo.checked} />
                    <label htmlFor={todo.id}>Scales</label>
                </li>
            </h5>
        </div>
    )
}

export default Todo;