import TaskItem from './TaskItem/TaskItem'
import s from './TaskList.module.scss'

const TaskList = props => {
  return (
          <div className={s.taskList}>
           <TaskItem/>
           <TaskItem/>
           <TaskItem/>
           <TaskItem/>
           <TaskItem/>
           <TaskItem/>
           <TaskItem/>
           <TaskItem/>
           <TaskItem/>
           <TaskItem/>
           <TaskItem/>
           <TaskItem/>
           <TaskItem/>
          </div>
  )
}

export default TaskList
