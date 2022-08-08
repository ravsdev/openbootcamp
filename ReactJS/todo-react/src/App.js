import './App.css';
import TaskList from './components/container/task_list';
import { LoginFormik } from './components/pure/forms/loginFormik';
import Registerformik from './components/pure/forms/registerFormik';

function App() {
  return (
    <div className="App">
      <TaskList />
      {/* <Registerformik/> */}
    </div>

  );
}

export default App;
