import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo,deleteTodo } from '../actions';

const TodoList = ({ todos, addTodo, toggleTodo,deleteTodo }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      addTodo(newTodo);
      setNewTodo('');
    }
  };

  const handleToggleTodo = (id) => {
    toggleTodo(id);
  };
  const handleDeleteTodo=(id)=>{
    deleteTodo(id);
  }

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            onClick={() => handleToggleTodo(todo.id)}
          >
            {todo.text}
            <button onClick={()=>handleDeleteTodo(todo.id)}>completed</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Add Todo"
          value={newTodo}
          id="task"
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={handleAddTodo}>Submit</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = {
  addTodo,
  toggleTodo,
  deleteTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
