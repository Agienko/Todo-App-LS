import './fonts/raleway.css'
import './App.scss';
import Header from './components/Header/Header';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import store from './redux/store';
import { Provider } from 'react-redux';
import TasksListsContainer from './components/TasksLists/TaskListsContainer';
import TasksContainer from './components/Tasks/TasksContainer';


const App = props => {
  return (
      <div className="App">
        <div className="AppContainer">
          <Provider store={store}>
            <BrowserRouter>
              <Header/>
              <Routes>
                <Route path={'/*'} element={<Navigate to={'/tasksLists/*'}/>} />
                <Route path={'/tasksLists/*'} element={<TasksListsContainer/>} />
                <Route path={'/tasks/*'} element={<TasksContainer/>} />
              </Routes>
            </BrowserRouter>
          </Provider>
        </div>
      </div>
   
  );
}

export default App;
