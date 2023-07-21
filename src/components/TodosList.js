import { toast, ToastContainer } from "react-toastify";

const TodosList = (props) => {
  const { todos, setTodos, setEditTodo } = props;

  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    );
    toast.success("Completed...", {
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: 1000
    });
  };

  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };

  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    toast.error("Delete Successfully...", {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 2000
    });
  };
  return (
    <>
      <div>
        {todos.map((todo) => (
          <li className="list-item" key={todo.id}>
            <input
              type="text"
              value={todo.title}
              className={`list ${todo.completed ? "complete" : ""}`}
              onChange={(e) => e.preventDefault()}
            />
            <div>
              <button
                className="button-complete task-button"
                onClick={() => handleComplete(todo)}
              >
                <i className="fa fa-check-circle"></i>
              </button>
              <button
                className="button-edit task-button"
                onClick={() => handleEdit(todo)}
              >
                <i className="fa fa-edit"></i>
              </button>
              <button
                className="button-delete task-button"
                onClick={() => handleDelete(todo)}
              >
                <i className="fa fa-trash"></i>
              </button>
              <ToastContainer />
            </div>
          </li>
        ))}
      </div>
    </>
  );
};

export default TodosList;
