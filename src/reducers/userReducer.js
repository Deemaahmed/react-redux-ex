import {
    SET_NAME,
    SET_AGE
} from '../actions/types'

const INITIAL_STATE = {
    name: "Reema",
    age: 20
}
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_NAME:
            state = {
                ...state,
                name: action.payload
            };
            break;
        case SET_AGE:
            state = {
                ...state,
                age: action.payload
            };
            break;
    }
    return state;
};

export default userReducer;