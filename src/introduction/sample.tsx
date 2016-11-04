import * as React from 'react';
import { Button } from '@redarrowlabs/strongback-react';

export interface SampleProps {
    title: string;
    value: string;
    onClick(): void;
};

export class Sample extends React.Component<SampleProps, {}> {
    constructor(props: SampleProps) { super(props); }

    render() {
        const title = this.props.title || '[no title]';
        const value = this.props.value || '[no value]';

        return <div>
            <div><code>{title}: {value}</code></div>
            <Button onClick={this.props.onClick}>Click Here</Button>
        </div>;
    }
}
