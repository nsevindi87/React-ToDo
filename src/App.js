import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import {useState} from 'react';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [todos, setTodos] = useState(["Berkant", "Berkant2"])

  return (
    <>
    <ToastContainer />
    <TodoForm setTodos={setTodos} todos={todos}/>
    <TodoList todos={todos}/>
    </>
  );
}

export default App;
