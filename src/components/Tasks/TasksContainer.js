import { connect } from "react-redux"
import Tasks from "./Tasks"

const mapStateToProps = state => ({lists: state.tasksLists.lists})

const TasksContainer = connect(mapStateToProps)(Tasks)

export default TasksContainer
