const CREATE_TASK_LIST = 'CREATE_TASK_LIST'
const ADD_TODO = 'ADD_TODO'
const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED'


const initialState = {
lists: [
    {
        id:5 ,name:'Новый список', 
        todos:[
            {id: 1, name:'Купить макароны', completed: false, date: '17.04.2022, 05:11:00'}, 
            {id: 2, name:'Купить сыр', completed: false,  date: '17.04.2022, 05:11:00'}
        ]
    },
   
],
activeTodoList: []
}


const tasksListsReducer = (state = initialState, action) => {

    switch (action.type) {
        case CREATE_TASK_LIST:
            return {
                ...state, 
                lists: [{id: Date.now(), name:'Новый список', todos:[]}, ...state.lists ]
            }
        case ADD_TODO:
           if(!action.text) return state
           return {
            ...state,
        lists:[
            ...state.lists.filter(i => i.id !== action.id),
            {
                ...state.lists.filter(i => i.id === action.id)[0],
                todos: [
                    ...state.lists.filter(i => i.id === action.id)[0].todos,
                    {
                        id: Date.now(), 
                        name: action.text, 
                        completed: false, 
                        date: new Date().toLocaleString()
                    }
                ]
            }
        ]
    }
            case TOGGLE_COMPLETED:
                
                state.lists.filter(i => i.id === action.id)[0].todos[action.idTodos].completed = !state.lists.filter(i => i.id === action.id)[0].todos[action.idTodos].completed
            return {
                ...state,
                lists:[
                    ...state.lists.filter(i => i.id !== action.id),
                    {
                        ...state.lists.filter(i => i.id === action.id)[0],
                        todos: [...state.lists.filter(i => i.id === action.id)[0].todos]
                    }
                ]
            }



        default:
            return state
    }
}
export default tasksListsReducer


export const createTaskList = () => ({type: CREATE_TASK_LIST})
export const addTodo = (id, text) => ({type: ADD_TODO, id, text})
export const toggleCompleted = (id, idTodos, value) => ({type: TOGGLE_COMPLETED, id, idTodos, value})