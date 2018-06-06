import { combineReducers } from 'redux';
import { UPDATE_TEXT_BOX, ADD_TO_LIST, LOGIN, LOGOUT, CLEAR_LIST, CHANGE_LIST_ITEM, DELETE_ITEM } from './Actions';
import { addNewListItem, changeListItem } from './Utilities';

let initialState = {
    textBoxText: "",
    list: [],
    loginMessage: "Please login"
}

const listReducer = (state=initialState, action) => {
    switch(action.type) {
        case UPDATE_TEXT_BOX:
            return Object.assign({}, state, { textBoxText: action.textBoxText });
        case ADD_TO_LIST:
            const newList = addNewListItem(state, action.newItem);
            return Object.assign({}, state, { list: newList });
        case CLEAR_LIST:
            console.log("Clearing list")
            return Object.assign({}, state, { list: [] });
        case CHANGE_LIST_ITEM:
            const newChangedList = changeListItem(state, action.value);
            return Object.assign({}, state, { list: newChangedList });
        case LOGIN:
            return Object.assign({}, state, { loginMessage: action.userDisplayName });
        case LOGOUT:
            return Object.assign({}, state, { loginMessage: "Please login" });
        case DELETE_ITEM:
            const listWithItemRemoved = state.list.filter(item => item.key !== action.itemKey)
            return Object.assign({}, state, { list: listWithItemRemoved })
        default:
            return state;
    }
}

export const reducers = combineReducers({
    listReducer
});