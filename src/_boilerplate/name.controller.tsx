import * as React from 'react';
import { StoreShape } from '../store';
import { connect, MapStateToProps } from 'react-redux';
import { doActionOne } from './name.duck';

export interface NameControllerStateProps {
    myProperty: string;
};

export interface NameControllerDispatches {
    onClick(): void;
}

type NameControllerProps = NameControllerStateProps & NameControllerDispatches;

export class NameControllerStateless extends React.Component<NameControllerProps, {}> {
    constructor(props: NameControllerProps) { super(props); }

    render() {
        return <div>
            <div>{this.props.myProperty}</div>
            <button onClick={this.props.onClick}>Click</button>
        </div>;
    }
}

const stateToProps: MapStateToProps<NameControllerStateProps, {}> = (state: StoreShape) => ({
    myProperty: 'TODO', //state.feature.myProperty()
});

const dispatches = {
    onClick: doActionOne,
};

export const NameController = connect<NameControllerStateProps, NameControllerDispatches, {}>(
    stateToProps,
    dispatches
)(NameControllerStateless);
