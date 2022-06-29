import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import Home from '../pages/Home';
import Contacts from '../pages/Contacts';
import Service from "../pages/Service";
import {RoutesList} from './RoutesList';
import AdvPage from '../pages/AdvPage';
import AllNews from '../pages/AllNews';

console.log('RoutesList^ '+RoutesList);

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
                <Route exact path="/news" element={<AllNews />} />
            </Routes>
        </Wrapper>
    )
}