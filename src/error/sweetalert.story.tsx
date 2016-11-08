import * as React from 'react';
import { storiesOf } from '@kadira/storybook';
import { SweetAlert } from './sweetalert';

storiesOf('SweetAlert', module)
    .add('ideal', () => {
        return <SweetAlertExample />;
    });

class SweetAlertExample extends React.Component<{}, { isOpen: boolean }> {
    constructor(props: any) {
        super(props);
        this.state = {
            isOpen: false,
        };

        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
    }

    render() {
        return <div>
            <SweetAlert
                title='An Alert'
                isOpen={this.state.isOpen}
                onClose={this.close}>
                <div>Something has gone terribly wrong.</div>
            </SweetAlert>
            <button onClick={this.open}>Open</button>
        </div>;
    }

    close() {
        this.setState({ isOpen: false });
    }

    open() {
        this.setState({ isOpen: true });
    }
}
