import React from 'react';
import { NavLink } from 'react-router-dom';

export default function AccountMenu() {
    return (
        <nav className="acc-menu">
            <ul className='list-unstyled mb-0'>
                <li><NavLink to="profile">Профиль</NavLink></li>
                <li><NavLink to="instructions">Как загрузить объявление</NavLink></li>
                <li><NavLink to="my-ads">Мои объявления</NavLink></li>
                <li><NavLink to="/">Онлайн чат</NavLink></li>
                <li><NavLink to="/">Избранные объявления</NavLink></li>
                <li><NavLink to="/">Мой кошелек</NavLink></li>
                <li><NavLink to="/">Мои покупки</NavLink></li>
                <li><NavLink to="settings">Настройки профиля</NavLink></li>
                <li><button type='button'>Выйти из профиля</button></li>
            </ul>
        </nav>
    );
}