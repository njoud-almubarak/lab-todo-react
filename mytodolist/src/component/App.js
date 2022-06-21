import { useState } from 'react';
import '../App.css';
import List from './listgroupe';
import Navbar from './Navbar';



const App = () => {
  const [todoItem, setTodoYourItem] = useState('');
  const [todoList, setTodoList] = useState([]);

  const onclick = (e) => {
    setTodoList([...todoList, todoItem]);
    setTodoYourItem('');
  };

  const onchange = (e) => {
    setTodoYourItem(e.target.value);
  };

  return (
    <>
     <Navbar Mynav='My Todo List'/>
     <div className="App">


<h3> My Todo list ..</h3>


      <div className='container'>


        <List todoList={todoList} />
        <input
        onChange={onchange}
        type='text'
        className='form-control mt-3 p-3'
        placeholder='Enter your item here ..'
        value={todoItem}
      />
      <button
        onClick={onclick}
        type='button'
        className=' mt-5 w-70 p-2'
      >
        Add your Item
      </button>
     


      </div>
      </div>
    </>
  );
};

export default App;