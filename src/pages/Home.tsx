import React from 'react';
import BookList from '../components/BookLists';
import UploadBook from '../components/UploadBook';

const Home: React.FC = () => {
    return (
        <div>
            <h1>PDF Library</h1>
            <UploadBook />
            <BookList />
        </div>
    );
};

export default Home;
