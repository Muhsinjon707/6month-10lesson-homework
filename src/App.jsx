import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainLayout from './layout/MainLayout';

import Home from './pages/Home';

import Comments from './pages/Comments';
import CommentDetails from './pages/CommentDetails';

import Posts from './pages/Posts';
import PostsDetail from './pages/PostsDetail';

import Login from './pages/Login';
import Register from './pages/Register';
import Error from './pages/Error';

function App() {
    return (
        <>
            <Routes>
                <Route index element={
                    <MainLayout>
                        <Home />
                    </MainLayout>
                } />

                <Route path='/posts' element={
                    <MainLayout>
                        <Posts />
                    </MainLayout>
                } />

                <Route path='/posts/:id' element={
                    <MainLayout>
                        <PostsDetail />
                    </MainLayout>
                } />

                <Route path='/comments' element={
                    <MainLayout>
                        <Comments />
                    </MainLayout>
                } />

                <Route path='/comments/:id' element={
                    <MainLayout>
                        <CommentDetails />
                    </MainLayout>
                } />

                <Route path='/login' element={
                    <MainLayout>
                        <Login />
                    </MainLayout>
                } />

                <Route path='/register' element={
                    <MainLayout>
                        <Register />
                    </MainLayout>
                } />

                <Route path='*' element={
                    <MainLayout>
                        <Error />
                    </MainLayout>
                } />
            </Routes>
        </>
    );
}

export default App;