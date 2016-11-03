import { getWindow } from './window';
import SweetAlert = require('sweetalert2');

const win = getWindow();

win.onerror = (msg, url, line, col, err) => {
    const formattedStack = err.stack.split('\n').join('<br/>');

    SweetAlert({
        title: 'We are so, so sorry.',
        html: `This app has encountered an error that it wasn\'t built to handle.
                <details>
                <summary>More Information</summary>
                <div style="width: 450px; height: 120px; overflow:scroll; white-space:nowrap;">
                <code>${formattedStack}</code>
                </div>
                </details>`,
        type: 'error',
    });
};
