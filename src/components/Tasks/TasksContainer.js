import { connect } from "react-redux"
import Tasks from "./Tasks"
import { addTodo } from "../../redux/reducers/tasksListsReducer"

const mapStateToProps = state => ({lists: state.tasksLists.lists})

const TasksContainer = connect(mapStateToProps, {addTodo})(Tasks)

export default TasksContainer
