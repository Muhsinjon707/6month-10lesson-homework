import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Pagination } from '@mui/material';

import { motion } from 'framer-motion';
import fadeIn from '../variants';

function Posts() {
    const [posts, setPosts] = useState([]);
    const [limit, setLimit] = useState(5);
    const [offset, setOffset] = useState(0);

    const [searchParams, setSearchParams] = useSearchParams();
    const [loading, isLoading] = useState(false);

    const page = parseInt(searchParams.get("page")) || 1;

    useEffect(() => {
        isLoading(true);
        axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}&_offset=${offset}`)
            .then(response => {
                if (response.status == 200) {
                    setPosts(response.data);
                }
            })
            .catch(error => console.log(error))
            .finally(() => isLoading(false));
    }, [page, limit]);

    useEffect(() => {
        const handleScroll = (e) => {
            const scrollHeight = e.target.documentElement.scrollHeight;
            const currentHeight = e.target.documentElement.scrollTop + window.innerHeight;
            if (currentHeight + 1 >= scrollHeight) {
                setOffset(offset + 5)
            }    
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [offset])

    const navigate = useNavigate();
    const redirectPostDetail = (post) => {
        navigate(`/posts/${post.id}`, { state: post });
    };

    const handlePage = (event, position) => {
        setSearchParams({page: position})
    };

    return (
        <motion.dev
            variants={fadeIn("up", .2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: .7 }}

            className='w-full flex flex-col items-start gap-5'>

            {loading && <h2 className='text-lg font-bold mx-auto'>Loading...</h2>}

            <div className='w-full flex flex-col gap-5'>
                {
                    posts.length > 0 && posts.map(post => {
                        return (
                            <motion.div
                                variants={fadeIn(post.id % 2 == 0 ? "left" : "right", .2)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: .7 }}

                                key={post.id} className='border rounded-md p-5 shadow-md shadow-slate-500 flex flex-col gap-3'>
                                <h3>ID: {post.id}</h3>
                                <h4>Title: {post.title}</h4>
                                <h4>Text: {post.body}</h4>
                                <button onClick={() => redirectPostDetail(post)} className='self-end bg-slate-500 text-white px-3 py-2 hover:bg-slate-600'>More</button>
                            </motion.div>
                        );
                    })
                }
            </div>

            <select value={limit} onChange={(e) => { setLimit(e.target.value); }}>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="25">25</option>
            </select>
            <Pagination className='mb-32' onChange={handlePage} count={10} page={page} />
        </motion.dev>
    );
}

export default Posts;