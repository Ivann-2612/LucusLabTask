import React from "react"
import "./TodoApp.css"
import Delete from '../img/delete.png'

export default function TodoApp() {
  const [todo, setTodo] = React.useState("")
  const [todos, setTodos] = React.useState([
    {
        id:1,
        text:'My new todo app'
    },
    {
        id:2,
        text:'My second todo app'
    }
  ])

  const handleChange = e => {
    setTodo(e.target.value);
  };

  const addTodo = () => {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        text: todo,
        completed: false
      }
    ]);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (todo === "") return;
    addTodo();
    setTodo("");
  };

  const removeTodo = todoId => {
    const updatedTodos = todos.filter(todo => todo.id !== todoId);
    setTodos(updatedTodos);
  };



  return (
    <div className="page-three">
      <form onSubmit={onSubmit}>
        <label htmlFor="todo"><h1>Todo app</h1></label>
        <br />
        <input
          id="todo"
          className="todo-input"
          onChange={handleChange}
          value={todo}
          placeholder='type todo actions...'
        />
        <button type="submit" className="add-btn">
          Add
        </button>
      </form>
      <div className='todo-div'>
        <ul className='todo-card'>
          {todos.map(todo => (
            <li key={todo.id}>
              <span
                className={todo.completed ? "todo-completed" : undefined}
                // onClick={() => toggleTodo(todo.id)}
              >
                {todo.text}
              </span>
              <span className="delete-btn" onClick={() => removeTodo(todo.id)}>
                <img src={Delete} alt='delete' style={{marginTop:'-2px'}} />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
