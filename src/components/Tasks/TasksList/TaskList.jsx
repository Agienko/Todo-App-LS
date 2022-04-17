import TaskItem from './TaskItem/TaskItem'
import s from './TaskList.module.scss'

const TaskList = ({todos}) => {
console.log(todos)
  return (
          <div className={s.taskList}>
            {todos.map(i => <TaskItem key={todos.id} name={todos.name} completed={todos.complated}/>)}
           
          </div>
  )
}

export default TaskList
