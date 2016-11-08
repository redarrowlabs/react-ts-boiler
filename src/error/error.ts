import { getWindow } from '../window';
import { unexpectedError } from './error.duck';
import { Store } from '../store';

const win = getWindow();

const errorHandler: ErrorEventHandler = (msg, url, line, col, err) => {
    Store.dispatch(unexpectedError(err));
};

win.onerror = errorHandler;
