import { createLogger } from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import RootReducer from './Root.reducer';

const logger = createLogger();

export default configureStore({
    reducer: RootReducer,
    middleware: [logger]
});