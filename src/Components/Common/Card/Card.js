import React, { useState } from 'react';
import styles from './Card.module.scss';
import '../../../utils/Styles/global.scss';
import { 
    IconButton, 
    TextField 
} from '@fluentui/react';

const iconStyles = { icon: { fontSize: 14, color: '#605E5C' } };

const { card, card_header, card_body } = styles;

const Card = ({
    id,
    styles,
    name,
    iconName,
    email,
    avatar,
    onEdit,
    edit,
    editMode,
    resetName,
    saveName,
    cardClickHandler
}) => {

    const [userName, setUserName] = useState(name);

    const onEditHeader = () => {
        onEdit(id);
    };

    const onChangeName = e => {
        setUserName(e.target.value);
    };

    const onResetName = () => {
        resetName(id);
    };

    const onSaveName = () => {
        saveName(userName, id);
    };

    const onCardClick = () => {
        cardClickHandler(id);
    }

    return (
        <div tabIndex={0} id={id} onClick={onCardClick} className={`${card} ${styles?.root} f-s-14`}>
            <div className={`${card_header} ${styles?.header} perfect-center`}>
                {
                    !edit && <div className='segoe-ui-semibold'>{name}</div>
                }
                {
                    edit &&
                    <TextField
                        ariaLabel='user name' 
                        underlined
                        value={userName}
                        onChange={onChangeName}
                    />
                }
                <>
                    {
                        !edit && 
                        <IconButton
                            styles={iconStyles}
                            ariaLabel='Edit'
                            iconProps={{ iconName }}
                            onClick={onEditHeader}
                        />
                    }
                    {
                        edit &&
                        <div>
                            <IconButton
                                styles={iconStyles}
                                ariaLabel='Cancel'
                                iconProps={{ iconName: editMode?.cancelIcon }}
                                onClick={onResetName}
                            />
                            <IconButton
                                styles={iconStyles}
                                ariaLabel='Save'
                                iconProps={{ iconName: editMode?.saveIcon }}
                                onClick={onSaveName}
                            />
                        </div>
                    }
                </>
            </div>
            <div className={`${card_body}`}>
                <div>{email}</div>
                <div className='m-t-10'>
                    <img src={avatar} width='120px' height='120px' alt='user avatar' />
                </div>
            </div>
        </div>
    );
};

export default Card;
