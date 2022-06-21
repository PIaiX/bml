import React from 'react';
import { MdStarOutline, MdOutlineShoppingCart, MdLogin, MdSearch } from "react-icons/md";

export default function Header() {

    return (
        <>
        <header>
            <div className="container">
                <div className="header_row">
                    <a href="index.html" className="logo">
                        <img src="images/logo.svg" alt="Бизнес My Life" />
                    </a>
                    <form action="" className="header_search d-none d-lg-flex">
                        <input type="search" placeholder="Поиск по сайту" />
                        <button type="submit" className="btn_main">
                            <MdSearch />
                        </button>
                    </form>
                    <div className="header_callback d-none d-sm-block">
                        <button type="button" className="color-2 td_und mx-auto mx-sm-0 mb-2 mb-sm-1 mb-md-0">Обратная связь</button>
                    </div>
                    
                    <a href="" className="btn-icon me-0 me-sm-5 me-md-0">
                        <MdStarOutline />
                        <span className='count'>3</span>
                    </a>
                    <a href="" className="btn-icon me-0 me-sm-5 me-md-0">
                        <MdOutlineShoppingCart />
                        <span className='count'>3</span>
                    </a>
                    <a href="" className="link d-flex align-items-center">
                        <span className='f_12 me-2'>Войти</span>
                        <MdLogin className='f_15'/>
                    </a>
                </div>
            </div>
        </header>
    <section className="top">
        <div className="container d-flex align-items-center justify-content-between py-1 py-lg-0">
            <nav id="main-menu" className="d-none d-lg-block">
                <ul className="mt-3 mt-md-0 ml-auto mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="">Поиск инвестора</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="">Предложения инвесторов</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="">Поиск бизнес парнёров</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="">Продажа бизнеса</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="">Франшизы</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="">Новости</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="">Контакты</a>
                    </li>
                </ul>
            </nav>
            <button className="navbar-toggler d-lg-none" type="button">
                <img src="images/icons/burger.svg" alt="меню" />
            </button>
            <form action="" className="header_search d-flex d-lg-none">
                <input type="search" placeholder="Поиск по сайту" />
                <button type="submit" className="btn_main">
                    {/* <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.1598 10.0287H10.4952L10.2596 9.80159C11.0841 8.84255 11.5804 7.59749 11.5804 6.24307C11.5804 3.22296 9.13235 0.774902 6.11224 0.774902C3.09213 0.774902 0.644073 3.22296 0.644073 6.24307C0.644073 9.26318 3.09213 11.7112 6.11224 11.7112C7.46667 11.7112 8.71173 11.2149 9.67076 10.3905L9.8979 10.626V11.2906L14.1042 15.4885L15.3577 14.235L11.1598 10.0287ZM6.11224 10.0287C4.01751 10.0287 2.32659 8.3378 2.32659 6.24307C2.32659 4.14834 4.01751 2.45742 6.11224 2.45742C8.20697 2.45742 9.8979 4.14834 9.8979 6.24307C9.8979 8.3378 8.20697 10.0287 6.11224 10.0287Z"/>
                    </svg> */}
                </button>
            </form>
        </div>
    </section>
    </>
    );
}