import { combineReducers } from "redux"

import classroomReducer from "./classroom"
import assignmentReducer from "./assignment"
import chartReducer from './charts'



export default combineReducers({
    user: classroomReducer,
    inclass: assignmentReducer,
    charts:chartReducer,

});
