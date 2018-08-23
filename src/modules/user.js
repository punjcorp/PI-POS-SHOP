export const ADD_USER = 'user/ADD_USER'
export const USER_BEING_UPDATED = 'user/UserBeingUpdated'
export const CLEAR_USER = 'user/ClearUser'
const initialState = {
    firstName: 'Rinesh',
    lastName: 'Kumar'
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state
            }
        case USER_BEING_UPDATED: {
            return {
                ...state,
                firstName: action.data.firstName,
                lastName: action.data.lastName
            }
        }
        case CLEAR_USER: {
            return {
                ...state,
                firstName: "",
                lastName: ""
            }
        }
        default:
            return state
    }
}

export const addUser = () => {
    console.log("Add user called ")
    return dispatch => {
        dispatch({
            type: ADD_USER
        })
    }
}
export const clearAll = () => {
    console.log("User Details being cleared ")
    return dispatch => {
        dispatch({
            type: CLEAR_USER
        })
    }
}
export const userBeingUpdated = () => {
    console.log("User Being updated  ")
    return dispatch => {
        dispatch({
            type: USER_BEING_UPDATED,
            data: {
                firstName: document.getElementById("firstName").value,
                lastName: document.getElementById("lastName").value
            }
        })
    }
}