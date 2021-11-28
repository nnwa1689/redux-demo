import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from './action/todolist'

function App() {
  const todolist = useSelector(state => state.todoList);
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState();
  return (
      <div className="App">
        <input value={newTodo} onChange={(e)=>{ setNewTodo(e.target.value); }}></input>
        <button type="button" onClick={ ()=> {dispatch(addTodo(newTodo));} }>新增</button>
        {
          todolist.map(e => (
            <h1>{ e }</h1>
          ))
        }
      </div>
  );
}

export default App;
