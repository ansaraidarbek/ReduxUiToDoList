
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, toggleTodoStatus } from './todosSlice';

function TodoList({setSelectedTab}) {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  const isRegistered = useSelector(state => state.user.isRegistered);

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleToggleTodoStatus = (id) => {
    dispatch(toggleTodoStatus(id));
  };

  const changeSelection = () => {
    setSelectedTab(1)
  }

  return (
    <div>
        {isRegistered ?
              <ul>
              {todos.elems.map(todo => (
                <li key={todo.id}>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleToggleTodoStatus(todo.id)}
                  />
                  <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                    {todo.title}
                  </span>
                  <button onClick={() => handleDeleteTodo(todo.id)}>Remove</button>
                </li>
              ))}
            </ul> :
             <>
            <p>Sign up to see todo list</p>
              <button onClick={() => changeSelection()}
              >Sign up</button>
            </>
        }
    
    </div>
  );
}

export default TodoList;

