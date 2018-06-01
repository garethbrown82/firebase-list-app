import FirebaseConnection from './FirebaseUtilities';

export const addNewListItem = (state, item) => {
    return [...state.list].concat([item])
}

export const changeListItem = (state, value) => {
    let currentList = [...state.list];
    console.log("current list: ", currentList)
    console.log("changed value: ", value)
    const indexToChange = currentList.findIndex(item => item.key === value.key);
    currentList[indexToChange] = value;
    //const newList = Object.assign([...currentList], {indexToChange: value} ); // tried to be immutable
    console.log("New list: ", currentList)
    return currentList;
}

export const loginUser = (dispatch) => {
    FirebaseConnection.loginFirebaseUser();
    return { loginMessage: "User logged in" }
}

export const logoutUser = () => {
    FirebaseConnection.logoutFirebaseUser();
    return { loginMessage: "Please login" }
}

export const logUserToConsole = () => {
    FirebaseConnection.logFirebaseUserToConsole();
}