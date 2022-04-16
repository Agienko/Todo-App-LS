import s from './TaskItem.module.scss'

const TaskItem = props => {
  return (
            <div className={s.taskItem}>
              <label>
                <input type="checkbox" />
                <div>Tsak Name</div>
              </label>
              <p>Date</p>
            </div>
  )
}

export default TaskItem
