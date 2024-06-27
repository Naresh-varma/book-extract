import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

const initialState = {
    books: [],
    loading: false,
    error: '',
};

export const fetchBooks = createAsyncThunk('library/fetchBooks', async () => {
    try {
        const response = await fetch('/getextracts?titlecontains=s');
        const data = await response.json();
        console.log(data.Extracts);
        return data.Extracts;
    } catch(e) {
        throw e;
    }
});

const bookSlice = createSlice({
    name: 'library',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchBooks.pending, (state) => {
            console.log('pending');

            state.loading = true;
            state.error = '';
        })
        builder.addCase(fetchBooks.fulfilled, (state, action) => {
            console.log('Fuldilled');

            state.books = action.payload;
            state.loading = false;
            state.error = '';
        })
        builder.addCase(fetchBooks.rejected, (state, action) => {

            console.log('Failed', action);
            state.loading = false;
            state.error = action.error.message;
            state.books = [];
        })
    }
})

export default bookSlice.reducer;
