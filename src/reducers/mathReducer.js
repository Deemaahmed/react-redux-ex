import {
    ADD,
    SUBTRACT
} from '../actions/types'

const INITIAL_STATE =  {
    result: 10,
    lastValues: []
}
const mathReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD:
            state = {
                ...state,
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            break;
        case SUBTRACT:
            state = {
                ...state,
                result: state.result - action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            break;
    }
    return state;
};

export default mathReducer;