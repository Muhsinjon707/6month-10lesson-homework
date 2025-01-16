import { Link } from 'react-router-dom';
import React from 'react';
import { useLocation } from 'react-router-dom';

function CommentDetails() {
    const location = useLocation();
    const comment = location.state;
    return (
        <div className='flex flex-col items-start justify-center w-full gap-8'>
            <button className='bg-red-700 transition-bg hover:bg-red-800 text-white px-3 py-1 rounded-md self-end'>
                <Link to="/comments">All Comments</Link>
            </button>
            <div className='w-full shadow-lg shadow-red-300 flex flex-col gap-5 items-start justify-center rounded-lg p-8'>
                <h2>Comment id: {comment.id}</h2>
                <h3>Comment by: {comment.name}</h3>
                <p>author: {comment.email}</p>
                <p>Text: {comment.body}</p>
            </div>
        </div>
    );
}

export default CommentDetails;