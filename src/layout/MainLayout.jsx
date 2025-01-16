import React from 'react';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';
import fadeIn from '../variants';

function MainLayout({ children }) {
    return (
        <motion.dev
            variants={fadeIn("right")}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: .4 }}

            className='container w-4/5 flex flex-col shadow-lg mx-auto'>
            <header className='container w-4/5 flex justify-between items-center mx-auto my-4 px-3 py-4 border-b-2 border-blue-100'>
                <div className='logo text-lg font-bold uppercase'>
                    <Link className='logo-link' to='/'>Muhsinjon.</Link>
                </div>
                <ul className='flex justify-between items-center gap-4'>
                    <li className='navElement'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='navElement'>
                        <Link to='/login'>Login</Link>
                    </li>
                    <li className='navElement'>
                        <Link to='/register'>Register</Link>
                    </li>
                </ul>
            </header>
            <main className='container w-4/5 mx-auto flex flex-col items-start justify-start my-5 p-4 min-h-screen text-blue-600'>
                {children}
            </main>
        </motion.dev>
    );
}

export default MainLayout;