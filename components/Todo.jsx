import './Todo.css';

function Todo({title}) {
 function deleteTodo(title) {
  console.log("deleteTodo", title.toUpperCase())
 }
  

    return  <div className="todo">
      <p>{title}</p>
      <button onClick={() => deleteTodo(title)}>Delete</button>
     </div>
}

export default Todo