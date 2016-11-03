import * as React from 'react';

export class App extends React.Component<{}, {}> {
    constructor(props: {}) { super(props); }

    render() {
        return <div>
            <nav>Navigation</nav>
            <main>
                {this.props.children}
            </main>
        </div>;
    }
}
