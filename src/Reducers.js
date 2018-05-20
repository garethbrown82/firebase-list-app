import { combineReducers } from 'redux';
import { UPDATE_TEXT_BOX, ADD_TO_LIST, LOGIN, LOGOUT } from './Actions';
import { addNewListItem, loginUser, logoutUser } from './Utilities';

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
            const newList = addNewListItem(state, action.event);
            return Object.assign({}, state, { list: newList });
        case LOGIN:
            const loggedInMessage = loginUser();
            return Object.assign({}, state, loggedInMessage);
        case LOGOUT:
            const loggedOutMessage = logoutUser();
            return Object.assign({}, state, loggedOutMessage);
        default:
            return state;
    }
}

export const reducers = combineReducers({
    listReducer
});