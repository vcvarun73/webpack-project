import React from 'react';
import { Nav } from '@fluentui/react';
import { routePaths } from '../../../utils/Constants/Constants';
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { setSelectedTab } from '../../../Store/actions';

const {
    HOME,
    DASHBOARD,
    MY_DASHBOARD,
    PORTFOLIO_HUB,
    PROGRAMS,
    WATCHLIST,
    MY_PROJECTS,
    MANAGE_STABILIZATION,
    RISK_REPOSITORY
} = routePaths;

const navStyles = {
    root: {
        width: 208,
        height: 'calc(100vh - 48px)',
        boxSizing: 'border-box',
        backgroundColor: '#FFFFFF',
        overflowY: 'auto'
    },
};

const navLinkGroups = [
    {
        links: [
            {
                name: 'Home',
                url: HOME,
                key: 'home'
            },
            {
                name: 'Dashboard',
                key: 'dashboard',
                url: DASHBOARD,
                links: [
                    {
                      name: 'My Dashboard',
                      url: MY_DASHBOARD,
                      key: 'my_dashboard',
                      target: '_blank',
                    },
                    {
                      name: 'Portfolio Hub',
                      url: PORTFOLIO_HUB,
                      key: 'portfolio_hub',
                      target: '_blank',
                    },
                    {
                        name: 'Programs',
                        url: PROGRAMS,
                        key: 'programs',
                        target: '_blank',
                    }
                ]
            },
            {
                name: 'Watchlist',
                url: WATCHLIST,
                key: 'watchlist',
                target: '_blank',
            },
            {
                name: 'My Projects',
                url: MY_PROJECTS,
                key: 'my_projects'
            },
            {
                name: 'Manage Stabilization',
                url: MANAGE_STABILIZATION,
                key: 'stabilization',
                target: '_blank',
            },
            {
                name: 'Risk Repository',
                url: RISK_REPOSITORY,
                key: 'risk_repo',
                target: '_blank',
            }
        ]
    }
];



const SideNavbar = ({ history }) => {

    const tab = useSelector(state => ({
        selectedTab: state.UserReducer.selectedTab
    }), shallowEqual);

    const dispatch = useDispatch();

    const onLinkClick = (e, item) => {
        e.preventDefault();
        history.push(item.url);
        dispatch(setSelectedTab(item.key));
    };

    return (
        <Nav
            onLinkClick={onLinkClick}
            selectedKey={tab.selectedTab}
            ariaLabel="Nav basic example"
            styles={navStyles}
            groups={navLinkGroups}
        />
    );
};

export default SideNavbar;
