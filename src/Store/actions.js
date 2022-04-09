import AxiosUtility from '../utils/axios/AxiosUtility';

import { 
    SAVE_USERS_INFO,
    SELECTED_TAB
} from './actionTypes';

export const getUsers = () => async dispatch => {
    try {
        const response = await AxiosUtility.get('https://reqres.in/api/users?page=2', '');
        if (response) {
            response.data?.data?.forEach(user => {
                user.edit = false;
            });
            dispatch(saveUsers(response.data));
        }
    }
    catch {

    }
};

const saveUsers = users => ({
    type: SAVE_USERS_INFO,
    payload: users
});

export const updateUser = ({userInfo, id, flag, userName = null}) => dispatch => {
    userInfo.users?.data.forEach(user => {
        if (user.id === id) {
            user.edit = flag;
            if (userName) {
                user.first_name = userName.split(' ')[0];
                user.last_name = userName.split(' ')[1];
            }
        }
    });
    dispatch(saveUsers(userInfo.users));
};

export const setSelectedTab = key => dispatch => {
    dispatch({
        type: SELECTED_TAB,
        payload: key
    });
};