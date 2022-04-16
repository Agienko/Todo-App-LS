import './fonts/raleway.css'
import './App.scss';
import Header from './components/Header/Header';
import TasksLists from './components/Main/TasksLists';

const App = props => {
  return (
    <div className="App">
      <div className="AppContainer">
        <Header/>
        <TasksLists/>
      </div>
    </div>
  );
}

export default App;
