export const ADD_USER = 'UserManagement/AddUser'
const initialState = {
    firstName: "first",
    lastName:"last"
}
export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                actionCalled: ADD_USER
            }
        default:
            return state
    }

}

export const addUser = () => {
    return dispatch => {
        dispatch({
            type: ADD_USER
        })
    }
}