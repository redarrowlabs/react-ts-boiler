import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { App } from "./app";
import { Provider } from 'react-redux';
import { Store } from './store';

const rootEl = document.getElementById("root");
ReactDOM.render(
    <AppContainer>
        <Provider store={Store}>
            <App />
        </Provider>
    </AppContainer>,
    rootEl
);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept("./app", () => {
        const NextApp = require("./app").App;
        ReactDOM.render(
            <AppContainer>
                <Provider store={Store}>
                    <NextApp />
                </Provider>
            </AppContainer>
            ,
            rootEl
        );
    });
}