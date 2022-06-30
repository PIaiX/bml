import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AccountMenu from './AccountMenu';
import UserProfile from './UserProfile';

export default function PersonalAccount() {
    return (
        <main>
            <div class="container py-5">
                <div class="row">
                    <div class="col-md-4 col-lg-3">
                        {/* <button class="f_12 fw_7 mb-3 d-flex align-items-center d-md-none" onclick="$(this).next('nav').toggle();">							
                            <span class="ml-2">Меню</span>
                        </button> */}
                        <AccountMenu />
                    </div>
                    <div class="col-md-8 col-lg-9">
                        <Routes>
                            <Route path="/" element={<UserProfile />} />
                            <Route path="profile" element={<UserProfile />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </main>
    );
}