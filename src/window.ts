interface ExtendedWindow extends Window {
    //provided by redux devtools, when installed
    //calling code should fallback to redux compose if unavailable
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
}

/** 
 * A cleaner way to reference window from code
 * that might be called in a node context.
 */
export function getWindow(): ExtendedWindow {
    return typeof window !== 'undefined'
        ? window as ExtendedWindow
        : {} as ExtendedWindow;
};
