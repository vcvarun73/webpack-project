import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import SideNavbar from './SideNavbar/SideNavbar';
import Home from '../Pages/Home/Home';
import Watchlist from '../Pages/Watchlist/Watchlist';
import styles from './LandingComponent.module.scss';
import '../../utils/Styles/global.scss';
import { routePaths } from '../../utils/Constants/Constants';
import CardDetails from '../Pages/CardDetails/CardDetails';

const {
    HOME,
    MY_DASHBOARD,
    PORTFOLIO_HUB,
    PROGRAMS,
    WATCHLIST,
    MY_PROJECTS,
    MANAGE_STABILIZATION,
    RISK_REPOSITORY,
    CARD_DETAILS
} = routePaths;

const { content } = styles;

const LandingComponent = () => {
    const history = useHistory();

    return (
        <div className='display-flex'>
            <section>
                <SideNavbar history={history} />
            </section>
            <section className={`${content}`}>
                <Route exact path={HOME}>
                    <Home />
                </Route>
                <Route exact path={WATCHLIST}>
                    <Watchlist />
                </Route>
                <Route exact path={CARD_DETAILS}>
                    <CardDetails />
                </Route>
            </section>
        </div>
    );
};

export default LandingComponent;