import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import regeneratorRuntime from "regenerator-runtime";
import { 
    getUsers,
    updateUser
} from '../../../Store/actions';
import Card from '../../Common/Card/Card';
import { icons } from '../../../utils/Constants/Constants';
import styles from './Home.module.scss';
import { deepClone } from '../../../utils/Helpers/Helpers';

const { card_container } = styles;

const { EDIT, CANCEL, ACCEPT } = icons;

const Home = () => {

    const users = useSelector(state => ({
        users: state.UserReducer.users
    }), shallowEqual);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers())
    }, []);

    const updateUserData = data => {
        const userInfo = deepClone(users);
        dispatch(updateUser({userInfo, ...data}));
    }

    const onEditUser = id => {
        updateUserData({id, flag: true});
    };

    const resetName = id => {
        updateUserData({id, flag: false});
    };

    const saveName = (userName, id) => {
        updateUserData({id, flag: false, userName});
    };

    const cardClickHandler = id => {
        
    };

    return (
        <div>
            <div className={`${card_container} p-25`}>
                {
                    users.users.data?.map(({id, first_name, last_name, email, avatar, edit}) => 
                        <div key={id}>
                            <Card
                                id={id}
                                name={`${first_name} ${last_name}`}
                                email={email}
                                avatar={avatar}
                                iconName={EDIT}
                                onEdit={onEditUser}
                                edit={edit}
                                editMode={{
                                    cancelIcon: CANCEL,
                                    saveIcon: ACCEPT
                                }}
                                resetName={resetName}
                                saveName={saveName}
                                cardClickHandler={cardClickHandler}
                            />
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Home;
