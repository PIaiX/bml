import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import Home from '../pages/Home';
import Contacts from '../pages/Contacts';
import {RoutesList} from './RoutesList';

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
                {/* {
                    RoutesList.map(({ path, component, bread }) =>
                    <Route key={bread} path={path} component={component} exact />)
                } */}
                {/* {
                    publicRoutes.map(({ path, Component }) =>
                    <Route key={path} path={path} component={Component} exact />
                )} */}
            </Routes>

        </Wrapper>
    )
}