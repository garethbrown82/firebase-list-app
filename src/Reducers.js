import { combineReducers } from 'redux';
import { UPDATE_TEXT_BOX, ADD_TO_LIST } from './Actions';
import { addNewListItem } from './Utilities';

let initialState = {
    textBoxText: "initial text",
    list: ["item1", "item2"]
}

const listReducer = (state=initialState, action) => {
    switch(action.type) {
        case UPDATE_TEXT_BOX:
            return Object.assign({}, state, { textBoxText: action.textBoxText });
        case ADD_TO_LIST:
            const newList = addNewListItem(state);
            return Object.assign({}, state, { list: newList })
        default:
            return state;
    }
}

export const reducers = combineReducers({
    listReducer
});