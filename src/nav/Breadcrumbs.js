import React from 'react';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { RoutesList } from './RoutesList';
import { NavLink } from 'react-router-dom';

export default function Breadcrumbs() {
    const breadcrumbs = useBreadcrumbs(RoutesList);
    return (
        <nav className="breadcrumbs">
            <ul className='list-unstyled'>
            {
                breadcrumbs.map(({match, breadcrumb}) => (
                    <li key={match.pathname}>
                        <NavLink to={match.pathname}>{breadcrumb}</NavLink>
                    </li>
                ))
            }
            </ul>
        </nav>
    );
}