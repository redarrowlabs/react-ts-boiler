import * as React from 'react';
import { defineMessages, FormattedMessage, injectIntl } from 'react-intl';
import { StoreShape } from './store';
import { connect, MapStateToProps } from 'react-redux';
import { SweetAlert } from './error/sweetalert';
import { closeErrorDialog } from './error/error.duck';

export class AppStateless extends React.Component<AppProps, {}> {
    constructor(props: {}) { super(props); }

    render() {
        const errorTitle = this.props.intl.formatMessage(messages.errorTitle);
        const errorBody = this.props.intl.formatMessage(messages.errorBody);
        const moreInfo = this.props.intl.formatMessage(messages.moreInfo);

        const {
            isErrorDialogOpen,
            onErrorDialogClose,
            errorStack,
            children,
        } = this.props;

        return <div>
            <nav><FormattedMessage {...messages.appName} /></nav>
            <main>
                {children}
            </main>
            <SweetAlert
                isOpen={isErrorDialogOpen}
                onClose={onErrorDialogClose}
                title={errorTitle}>
                <UnexpectedError
                    errorBody={errorBody}
                    moreInfo={moreInfo}
                    errorStack={errorStack} />
            </SweetAlert>
        </div>;
    }
}

function UnexpectedError(props: UnexpectedErrorProps) {
    return <div>
        {props.errorBody}
        <details>
            <summary>{props.moreInfo}</summary>
            <div style={{ width: 450, height: 120, overflow: 'scroll', whiteSpace: 'nowrap' }}>
                <code dangerouslySetInnerHTML={{ __html: props.errorStack }} />
            </div>
        </details>
    </div>;
}

const stateToProps: MapStateToProps<AppStateProps, AppOwnProps> = (state: StoreShape) => ({
    isErrorDialogOpen: state.error.isOpen,
    errorStack: state.error.stack,
});

const dispatches = {
    onErrorDialogClose: closeErrorDialog,
};

export const App = connect<AppStateProps, AppDispatchProps, {}>(
    stateToProps,
    dispatches
)(injectIntl(AppStateless));

interface AppStateProps {
    isErrorDialogOpen: boolean;
    errorStack: string;
}

interface AppDispatchProps {
    onErrorDialogClose(): void;
}

interface AppOwnProps {
    intl: any; //i18n imperative API
}

type AppProps = AppStateProps & AppDispatchProps & AppOwnProps;

interface UnexpectedErrorProps {
    errorBody: string;
    moreInfo: string;
    errorStack: string;
}

const messages = defineMessages({
    appName: {
        id: 'app.name',
        description: 'App name',
        defaultMessage: 'APP_NAME',
    },
    errorTitle: {
        id: 'app.error.title',
        description: 'Error modal title',
        defaultMessage: 'ERROR_TITLE',
    },
    errorBody: {
        id: 'app.error.body',
        description: 'Error modal body',
        defaultMessage: 'ERROR_BODY',
    },
    moreInfo: {
        id: 'app.error.more-info',
        description: 'Error modal error information toggle',
        defaultMessage: 'MORE_INFO',
    },
});
