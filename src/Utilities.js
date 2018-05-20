export const addNewListItem = (state) => {
    return [...state.list].concat([state.textBoxText])
}