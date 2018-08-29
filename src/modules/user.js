import $ from 'jquery'
export const ADD_USER = 'user/ADD_USER'
export const USER_BEING_UPDATED = 'user/UserBeingUpdated'
export const CLEAR_USER = 'user/ClearUser'
export const LOAD_USER = 'user/loadUser'

const initialState = {
    firstName: 'undefined',
    lastName: 'undefined'
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
        case LOAD_USER:
            $.get("../MockData/UserDetails.json")
                .done(function (data) {
                    alert("Data Loaded: " + data);
                });
            return {
                ...state
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