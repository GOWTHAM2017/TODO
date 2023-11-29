import './App.css';
import { useDispatch } from 'react-redux';
import { addTodo } from './actions';
import { useState } from 'react';
import TodoList from './todoList';

function App() {
  const dispatch  = useDispatch()
  const [title, setTitle] = useState('')
  const handleTodo = ()=>{
    if(title.trim()){
      const newTodo ={
        title:title
      }
      dispatch(addTodo(newTodo))
      setTitle("")
    }
  }
  return (
    <div className='container mt-5 w-50'>
      <h3 className='text-primary text-center'>Todo App using redux in React</h3>
      <div className='input-group'>
        <input type='text' className='form-control' value={title} onChange={(e)=> setTitle(e.target.value)} />
        <button className='btn btn-primary mx-2' onClick={() =>handleTodo()}>Add</button>
      </div>
      <TodoList></TodoList>
    </div>
  );
}

export default App;
