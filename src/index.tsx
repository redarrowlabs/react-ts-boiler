import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { App } from "./app";

const rootEl = document.getElementById("root");
ReactDOM.render(
    <AppContainer>
        <App />
    </AppContainer>,
    rootEl
);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept("./app", () => {
        const NextApp = require("./app").App;
        ReactDOM.render(
            <AppContainer>
                <NextApp />
            </AppContainer>
            ,
            rootEl
        );
    });
}