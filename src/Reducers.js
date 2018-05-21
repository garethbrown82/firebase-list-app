import { combineReducers } from 'redux';
import { UPDATE_TEXT_BOX, ADD_TO_LIST, LOGIN, LOGOUT } from './Actions';
import { addNewListItem, logoutUser } from './Utilities';

let initialState = {
    textBoxText: "initial text",
    list: ["item1", "item2"],
    loginMessage: "Please login"
}

const listReducer = (state=initialState, action) => {
    switch(action.type) {
        case UPDATE_TEXT_BOX:
            return Object.assign({}, state, { textBoxText: action.textBoxText });
        case ADD_TO_LIST:
            return Object.assign({}, state, { list: action.newItem });
        case LOGIN:
            return Object.assign({}, state, { loginMessage: action.userDisplayName });
        case LOGOUT:
            return Object.assign({}, state, { loginMessage: "Please login" });
        default:
            return state;
    }
}

export const reducers = combineReducers({
    listReducer
});