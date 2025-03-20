import logo from './logo.svg';
import './App.css';
import Todo from './Components/TODO.jsx';
import Title from './Components/Title.jsx';
import Modal from './Components/Modal.jsx'

function App() {
  return (
    <div>
   <Title />
   <div>
    <input onChange={(event) => {
console.log (event.target.value)
    }} type="text" />
    <button>
      Add Todo
    </button>
   </div>
    <div className='todo__wrapper'>
    <Todo title="Finish Frontend Simplified" />
   <Todo title="Finish Frontend Section" />
   <Todo title="Land a $100k Job" />
   </div>
   { <Modal title="Are you sure you want to add?"/> }
   
   
   
    </div>

  );
}

export default App;
