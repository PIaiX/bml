import React from 'react';
import { Outlet } from 'react-router-dom'
import AccountMenu from '../pages/profile/AccountMenu';

const PersonalAccountLayout = ({isMobile}) => {
    return <>
        {!isMobile
            ? <div className="row">
                <div className="col-md-4 col-lg-3">
                    <AccountMenu/>
                </div>
                <div className="col-md-8 col-lg-9">
                    <Outlet />
                </div>
            </div>
            : <Outlet />
        }
    </>
};

export default PersonalAccountLayout;