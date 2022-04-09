import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { initializeIcons } from '@fluentui/react';
import { store } from './utils/store';
import Header from './Components/Header/Header';
import './utils/Styles/global.scss';
import LandingComponent from './Components/LandingComponent/LandingComponent';
initializeIcons();

const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <div className='segoe-ui'>
                <Header />
                <LandingComponent />
            </div>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(<App/>, document.getElementById('root'));
