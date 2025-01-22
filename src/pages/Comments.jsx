import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { useSearchParams } from 'react-router-dom';

function Comments() {
    const [comments, setComments] = useState([]);
    const [loading, isLoading] = useState(false);
    // const [searchParams, setSearchParams] = useSearchParams();

    const [offset, setOffset] = useState(0)
    const [limit, setLimit] = useState();

    // const page = parseInt(searchParams.get("page")) || 1

    const url = `https://jsonplaceholder.typicode.com/comments?offset=%${offset}&limit=${limit}`;

    useEffect(() => {
        isLoading(true);
        axios.get(url)
            .then(response => {
                if (response.status == 200) {
                    setComments(response.data);
                }
            })
            .catch(error => console.log(error))
            .finally(() => isLoading(false));
    }, []);

    const navigate = useNavigate();
    const redirectCommentDetails = (comment) => {
        navigate(`/comments/${comment.id}`, { state: comment });
    };

    useEffect(() => {
        const handleScroll = (e) => {
            const scrollHeight = e.target.documentElement.scrollHeight
            const currentHeight = e.target.documentElement.scrollTop + window.innerHeight

            if (currentHeight + 1 >= scrollHeight) {
                setOffset(offset + 5);
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    return (
        <div className='w-full flex flex-col items-center justify-center gap-5'>
            <h3 className="text-lg font-bold">{loading && <p>Loading...</p>}</h3>

            <div className="w-full mx-auto flex flex-col gap-8 items-center justify-center">
                {
                    comments.length > 0 && comments.map((comment, index) => {
                        return (
                            <div key={index} className='w-2/3 rounded-md flex flex-col gap-4 items-start justify-center shadow-lg p-5 shadow-slate-500 transition-all duration-500 hover:transform hover:-translate-y-3'>
                                <h3>ID: {comment.id}</h3>
                                <h3>Name: {comment.name}</h3>
                                <p>email: {comment.email}</p>
                                <p>Text: {comment.body}</p>

                                <button onClick={() => redirectCommentDetails(comment)} className='self-end bg-green-600 text-white py-1 px-4 transition-bg duration-500 hover:bg-green-800'>Info</button>
                            </div>
                        );
                    })
                }
            </div>
            {/* <Pagination className='mb-32' onChange={handlePage} count={10} page={page} /> */}
        </div>
    );
}

export default React.memo(Comments);