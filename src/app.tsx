import * as React from 'react';

export interface AppProps {
}

export class App extends React.Component<AppProps, {}>{
    constructor(props: AppProps) { super(props) }
    render() {
        return <div>Hello, World 123</div>
    }
}