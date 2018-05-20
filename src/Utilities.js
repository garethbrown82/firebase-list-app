import FirebaseConnection from './FirebaseUtilities';

export const addNewListItem = (state, event) => {
    event.preventDefault();
    const item = state.textBoxText;
    
    FirebaseConnection.addItemToFirebaseList(item)
    return [...state.list].concat([item])
}

export const loginUser = () => {
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