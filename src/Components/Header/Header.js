import React from 'react';
import { Icon } from '@fluentui/react';
import styles from './Header.module.scss';
import '../../utils/Styles/global.scss';
import { icons } from '../../utils/Constants/Constants';

const { header, header_container, icon_section, header_icon } = styles;
const { HELP, EMOJI2 } = icons;

const iconClasses = `${header_icon} perfect-center`;

const Header = () => {
    return (
        <header className={`${header} display-flex`} >
            <div className={`${header_container} perfect-center`}>
                <section className='f-s-16 segoe-ui-semibold pointer'>Virtuoso</section>
                <section className={`${icon_section} perfect-center pointer`}>
                    <div className={iconClasses} tabIndex='0'>
                        <Icon
                            ariaLabel='help'
                            iconName={HELP}
                        />
                    </div>
                    <div className={iconClasses} tabIndex='0'>
                        <Icon
                            ariaLabel='help'
                            iconName={EMOJI2}
                        />
                    </div>
                </section>
            </div>
        </header>
    );
};

export default Header;
