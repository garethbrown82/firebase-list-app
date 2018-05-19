import { combineReducers } from 'redux';
import { UPDATE_TEXT_BOX, ADD_TO_LIST } from './Actions';

let initialState = {
    textBoxText: "initial text",
    list: ["item1", "item2"]
}

const listReducer = (state=initialState, action) => {
    switch(action.type) {
        case UPDATE_TEXT_BOX:
            return Object.assign({}, state, { textBoxText: action.textBoxText });
        case ADD_TO_LIST:
            return Object.assign({}, state, { list: [...state.list].concat([state.textBoxText]) })
        default:
            return state;
    }
}

export const reducers = combineReducers({
    listReducer
});