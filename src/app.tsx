import * as React from 'react';
import { Store, StoreShape } from './store';
import { connect } from 'react-redux'
import { handleClick } from './example.duck'

export interface AppProps {
    store: StoreShape,
    onClick: any
}

export class AppStateless extends React.Component<AppProps, {}>{
    constructor(props: AppProps) { super(props) }
    render() {
        const greeting = this.props.store.featureOne.greet;
        const handler = this.props.onClick;

        return <div>
            <div>Hello, {greeting}</div>
            <button onClick={handler}>Click Here</button>
        </div>
    }
}

const mapStateToProps = (state: StoreShape) => ({ store: state });
const dispatchMap = {
    onClick: handleClick
}

export const App = connect(mapStateToProps, dispatchMap)(AppStateless)