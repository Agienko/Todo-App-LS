const CREATE_TASK_LIST = 'CREATE_TASK_LIST'

const initialState = {
lists: [
    {id:1 ,name:'Новый список', todos:[{id: 1, name:'Купить макароны', completed: false}]},
    {id:2 ,name:'Новый список2', todos:[{id: 2, name:'Купить сыр', completed: false}]},
    {id:3 ,name:'Новый список3', todos:[{id: 3, name:'сходить в магазин', completed: false}]},
    {id:4 ,name:'Новый список4', todos:[{id: 4, name:'вынести мусор', completed: false}]},
    {id:5 ,name:'Новый список5', todos:[{id: 5, name:'Купить макароны', completed: false}]},
],
activeTodoList: []
}


const tasksListsReducer = (state = initialState, action) => {

    switch (action.type) {
        case CREATE_TASK_LIST:
            return {...state, lists: [{id: Date.now(), name:'Новый список', todos:[]}, ...state.lists, ]}
        default:
            return state
    }
}
export default tasksListsReducer


export const createTaskList = () => ({type: CREATE_TASK_LIST})
