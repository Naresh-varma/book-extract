import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../store/librarySlice';
import { TableView } from './TableView';
import { Loader } from './LoadingSpinner';


export const Library = () => {
    const library = useSelector((state) => state.library);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBooks())
    }, [dispatch]);

    return (
        <Fragment>
            {library.loading && <Loader/>}
            {library.error && <h1>Error fetching books</h1>}
            {!library.loading && library.books.length && <TableView books={library.books}/>}
        </Fragment>
    );
}