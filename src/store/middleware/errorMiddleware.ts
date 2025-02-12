import { Middleware } from '@reduxjs/toolkit';
import { showErrorAlert } from '../reducers/errorSlice';

export const errorMiddleware: Middleware = (store) => (next) => (action) => {
    const result = next(action);

    if (showErrorAlert.match(action)) {
        setTimeout(() => {
            store.dispatch({ type: 'error/hideErrorAlert' });
        }, 5000);
    }

    return result;
}; 