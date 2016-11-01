import * as React from 'react';
import { StoreShape } from './store';
import { connect, MapStateToProps } from 'react-redux';
import { handleClick, getRemoteResource } from './example.duck';

export interface AppStateProps {
    greeting: string;
    answer: number;
}

export interface AppDispatchProps {
    onGreeting(): void;
    onFetch(): void;
}

type AppProps = AppStateProps & AppDispatchProps

export class AppStateless extends React.Component<AppProps, {}> {
    constructor(props: AppProps) { super(props); }
    render() {
        const {
            greeting,
            answer,
            onGreeting,
            onFetch,
        } = this.props;

        return <div>
            <div>Hello, {greeting}</div>
            <button onClick={onGreeting}>Click Here</button>
            <div>The answer is {answer}.</div>
            <button onClick={onFetch}>Fetch</button>
        </div>;
    }
}

const mapStateToProps: MapStateToProps<AppStateProps, {}> = (state: StoreShape) => ({
    greeting: state.featureOne.greet,
    answer: state.featureOne.answer,
});

const dispatchMap = {
    onGreeting: handleClick,
    onFetch: getRemoteResource,
};

export const App = connect<AppStateProps, AppDispatchProps, {}>(mapStateToProps, dispatchMap)(AppStateless);
