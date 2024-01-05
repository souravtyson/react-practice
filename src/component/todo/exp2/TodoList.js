import Todo from "./Todo";

const TodoList = ({ children }) => {
    return (
        <div>
            <h4>
                Inside TodoList
                <ul>
                    {children}
                </ul>
            </h4>
        </div>
    )
}

export default TodoList;