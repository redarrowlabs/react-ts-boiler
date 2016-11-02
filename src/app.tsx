import * as React from 'react';
import { IntroController } from './introduction/intro.controller';

export class App extends React.Component<{}, {}> {
    constructor(props: {}) { super(props); }

    render() {
        return <IntroController />;
    }
}
