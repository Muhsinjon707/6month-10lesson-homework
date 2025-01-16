import React from 'react';
import { useLocation, Link } from 'react-router-dom';

import { motion } from 'framer-motion';
import fadeIn from '../variants';

function PostsDetail() {
    const location = useLocation();
    const post = location.state;
    return (
        <div className='w-full flex flex-col gap-5 items-start justify-center'>
            <button className='bg-gray-700 text-white py-2 px-4 transition-bg duration-500 hover:bg-gray-950'>
                <Link to = "/posts">Back</Link>
            </button>
            <motion.div
                variants={fadeIn("up", .4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: .4 }}

                className='w-full mt-10 border-2 min-h-80 flex flex-col gap-5 items-center justify-center px-10 text-center'>
                <h2>ID: {post.id}</h2>
                <h2>User ID: {post.userId}</h2>
                <h3>Title: {post.title}</h3>
                <p>Text: {post.body}</p>
            </motion.div>
        </div>
    );
}

export default PostsDetail;