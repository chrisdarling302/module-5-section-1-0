import './App.css';
import Todo from "./components/Todo.jsx";

function App() {
  return (
    <div>
     <h1>My ToDo List</h1>
     <Todo></Todo>
     <div>
      <h2>Finish Frontend Simplified</h2>
      <button>Delete</button>
     </div>
     <div>
      <h2>Finish the Interview Section</h2>
      <button>Delete</button>
     </div>
     <div>
      <h2>Land a $100K Job</h2>
      <button>Delete</button>
     </div>
    </div>
  );
}

export default App;
