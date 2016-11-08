import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { IntlProvider, addLocaleData } from 'react-intl';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { IntroController } from './introduction/intro.controller';
import { App } from './app';
import { Store } from './store';

import './styles';
import './error/error';

//Locale conventions
import en = require('react-intl/locale-data/en');
addLocaleData(en);

//Translations
import { enUS } from './i18n/en-US';

const rootEl = document.getElementById('root');
const history = syncHistoryWithStore(browserHistory, Store);

/**
 * 🌠     🌙
 *    🚀
 * 🌃🌃🌃🌃🌃
 */
function blastOff() {
    ReactDOM.render(
        <AppContainer>
            <Provider store={Store} key='provider'>
                <IntlProvider locale='en-US' messages={enUS}>
                    <Router history={history} key={`${new Date()}`}>
                        <Route path='/' component={App}>
                            <IndexRoute component={IntroController} />
                        </Route>
                    </Router>
                </IntlProvider>
            </Provider>
        </AppContainer>,
        rootEl
    );
}

blastOff();

// Hot Module Replacement API
const mod = module as any;
if (mod.hot) {
    mod.hot.accept();
}
