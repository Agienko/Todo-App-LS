import s from './TaskItem.module.scss'

const TaskItem = props => {
  return (
            <div className={props.little ? s.little : s.taskItem}>
              <label>
                <input type="checkbox" disabled ={props.little}/>
                <div className={s.completed}>Tsak Name</div>
              </label>
              <p>Date</p>
            </div>
  )
}

export default TaskItem
