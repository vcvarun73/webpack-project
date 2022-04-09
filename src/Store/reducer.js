import { 
    SAVE_USERS_INFO,
    SELECTED_TAB
} from './actionTypes'; 

const initialState = {
    users: {},
    selectedTab: 'home'
};

export const UserReducer = (state = initialState, action = null) => {

    switch(action.type) {

        case SAVE_USERS_INFO:
            return {
                ...state,
                users: action.payload
            };
        
        case SELECTED_TAB:
            return {
                ...state,
                selectedTab: action.payload 
            };

        default:
            return state;

    }

};
