import {FIND_ALL_TUITS}
    from "../../../actions/tuits-actions";

const tuitReducer = (state = [], action) => {
        switch (action.type) {
            case FIND_ALL_TUITS:
                return action.tuits;
            default:
                return state;
        }

    }

export default tuitReducer;