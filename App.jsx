import "./App.css";
import Todo from "./components/Todo.jsx";
import Title from "./components/Title.jsx";
import Modal from "./components/Modal.jsx";

function App() {
  let isModalOpen = false;

  function toggleModal() {
    isModalOpen = !isModalOpen
    console.log(isModalOpen)
  }
  return (
    <div>
      <Title />
      <div>
        <input
          type="text"
          onChange={(event) => {
            console.log(event.target.value);
          }}
        />
        <button onClick={toggleModal}>Add Todo</button>
      </div>
      <div className="todo_wrapper">
        <Todo title="Finish Frontend Simplified" />
        <Todo title="Finish Interview Section" />
        <Todo title="Land a $100k Job" />
      </div>
      {isModalOpen && <Modal title="Confirm Delete?" />}
    </div>
  );
}

export default App;
