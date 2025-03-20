import './Todo.css'

function Todo({title}) {
  function deleterTodo() {

  }
  
  return (
    <div className='todo'>
      <p>{title}</p>
      <p>{paragraph}</p>
      <button onClick={() => {

      }}>Delete</button>
    </div>
  );
}

export default Todo;
