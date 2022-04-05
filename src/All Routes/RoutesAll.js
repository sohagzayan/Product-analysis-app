import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../components/NotFound/NotFound';
import About from '../pages/About';
import Blogs from '../pages/Blogs';
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import Reviews from '../pages/Reviews';


const RoutesAll = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
};

export default RoutesAll;