import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import Home from '../pages/Home';
import Contacts from '../pages/Contacts';
import Service from "../pages/Service";
import AdvPage from '../pages/AdvPage';
import AllNews from '../pages/AllNews';
import News from '../pages/News';

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
                <Route exact path="/contacts" element={<Contacts />} />
                <Route exact path="/service" element={<Service />} />
                <Route exact path="/adv-page" element={<AdvPage />} />
                <Route path="news" element={<AllNews />} />
                <Route path="news/news-0" element={<News />} />
            </Routes>
        </Wrapper>
    )
}