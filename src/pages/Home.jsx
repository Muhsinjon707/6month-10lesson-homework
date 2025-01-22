import React from 'react';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';
import fadeIn from '../variants';

function Home() {
    return (
        <motion.div
            variants={fadeIn("left")}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 1 }}

            className='w-full flex flex-col items-start justify-center gap-4'>
            <h1 className='text-2xl font-bold'>Brand new homework</h1>

            <div className='w-full flex flex-col gap-5 mt-8'>
                <motion.div
                    variants={fadeIn("right")}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: .3 }}

                    className='w-1/3 bg-white shadow-2xl border-2 rounded-lg p-5 flex justify-between py-8 hover:transform hover:scale-110 transition-all duration-500'>
                    <h3 className='py-3 px-4 bg-blue-800 text-white rounded-sm'>Posts</h3>
                    <button className='text-lg hover:font-bold transition-all duration-200'>
                        <Link to="/posts">Just pagination</Link>
                    </button>
                </motion.div>

                <motion.div
                    variants={fadeIn("right")}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: .3 }}

                    className='w-1/3 bg-white shadow-2xl border-2 rounded-lg p-5 flex justify-between py-8 hover:transform hover:scale-110 transition-all duration-500'>
                    <h3 className='py-3 px-4 bg-blue-800 text-white rounded-sm'>Comments</h3>
                    <button className='text-lg hover:font-bold transition-all duration-200'>
                        <Link to="/comments">Infinite scrolling</Link>
                    </button>
                </motion.div>

            </div>
        </motion.div>
    );
}

export default Home;