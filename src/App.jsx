import './fonts/raleway.css'
import './App.scss';
import Header from './components/Header/Header';
import TasksLists from './components/TasksLists/TasksLists';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Tasks from './components/Tasks/Tasks';

const App = props => {
  return (
    
      <div className="App">
        <div className="AppContainer">
        <BrowserRouter>
            <Header/>
            <Routes>
              <Route path={'/'} element={<Navigate to={'/tasksLists'}/>} />
              <Route path={'/tasksLists'} element={<TasksLists/>} />
              <Route path={'/tasks'} element={<Tasks/>} />
            </Routes>
           
          </BrowserRouter>
        </div>
      </div>
   
  );
}

export default App;
