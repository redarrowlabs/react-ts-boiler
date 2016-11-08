import * as React from 'react';
import * as ReactDOM from 'react-dom/server';
import swal = require('sweetalert2');

export interface SweetAlertProps {
    isOpen: boolean;
    title: string;
    onClose(): void;
};

export class SweetAlert extends React.Component<SweetAlertProps, {}> {
    constructor(props: SweetAlertProps) { super(props); }

    render() {
        //NOTHING
        return <noscript />;
    }

    componentDidUpdate(prev: SweetAlertProps) {
        // Is opening
        if (!prev.isOpen && this.props.isOpen) {
            // typing bug? children is a ReactNode, but this takes a ReactElement 
            const body = ReactDOM.renderToStaticMarkup(this.props.children as any);

            swal({
                title: this.props.title,
                html: body,
                type: 'error',
                onClose: this.props.onClose,
            });
        }

        // Is closing
        if (prev.isOpen && !this.props.isOpen) {
            swal.close();
        }
    }
}
