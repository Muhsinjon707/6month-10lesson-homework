import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { motion } from 'framer-motion';
import fadeIn from '../variants';
import { Pagination } from '@mui/material';

function Comments() {
    const [comments, setComments] = useState([]);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState();

    const [loading, isLoading] = useState(false);

    const url = `https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=${limit}`;

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
    }, [page, limit]);

    const navigate = useNavigate();
    const redirectCommentDetails = (comment) => {
        navigate(`/comments/${comment.id}`, { state: comment });
    };

    const handlePage = (event, position) => {
        setPage(position);
    };
    return (
        <motion.div
            variants={fadeIn("left")}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: .4 }}

            className='w-full flex flex-col items-center justify-center gap-5'>
            <h3 className="text-lg font-bold">{loading && <p>Loading...</p>}</h3>

            <div className="w-full mx-auto flex flex-col gap-8 items-center justify-center">
                {
                    comments.length > 0 && comments.map(comment => {
                        return (
                            <motion.div
                                variants={fadeIn(comment.id % 2 == 0 ? "left" : "right")}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: .4 }}

                                className='w-2/3 rounded-md flex flex-col gap-4 items-start justify-center shadow-lg p-5 shadow-slate-500 transition-all duration-500 hover:transform hover:-translate-y-3' key={comment.id}>
                                <h3>ID: {comment.id}</h3>
                                <h3>Name: {comment.name}</h3>
                                <p>email: {comment.email}</p>
                                <p>Text: {comment.body.slice(0, 15)}</p>

                                <button onClick={() => redirectCommentDetails(comment)} className='self-end bg-green-600 text-white py-1 px-4 transition-bg duration-500 hover:bg-green-800'>Info</button>
                            </motion.div>
                        );
                    })
                }
            </div>
            <div className='m-5'>
                <select value={limit} onChange={(e) => { setLimit(e.target.value); }}>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="25">25</option>
                </select>
            </div>
            <Pagination className='mb-32' onChange={handlePage} count={10} page={page} />
        </motion.div>
    );
}

export default Comments;