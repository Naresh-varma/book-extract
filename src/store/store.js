import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './librarySlice';

const store = configureStore({
    reducer: {
        library: bookReducer,
    }
})

export default store;


