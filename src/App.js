import './App.css';
import { Header } from './components/Header';
import { CountOfToDos } from './components/CountOfToDos';
import { AddToDo } from './components/AddToDo';
import { ToDoList } from './components/ToDoList';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <CountOfToDos />
        <ToDoList />
        <AddToDo />
      </div>
    </GlobalProvider>
  );
}

export default App;
