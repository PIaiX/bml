import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import Home from '../pages/Home';

export default function AppRouter() {
    const Wrapper = ({children}) => {
        const location = useLocation();
        useLayoutEffect(() => {
          document.documentElement.scrollTo(0, 0);
        }, [location.pathname]);
        return children
    } 
   
    return (
        <Wrapper>
            <Routes>
                <Route exact path="/" element={<Home />} />
            </Routes>
        </Wrapper>
    )
}