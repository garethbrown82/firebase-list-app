import FirebaseConnection from './FirebaseUtilities';

export const addNewListItem = (state, item) => {
    return [...state.list].concat([item])
}

export const changeListItem = (state, value) => {
    let changingList = [...state.list];
    console.log("current list: ", changingList)
    console.log("changed value: ", value)
    const indexToChange = changingList.findIndex(item => item.key === value.key);
    changingList[indexToChange] = value;
    console.log("New list: ", changingList)
    return changingList;
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