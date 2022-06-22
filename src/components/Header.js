import React from 'react';
import { MdStarOutline, MdOutlineShoppingCart, MdLogin, MdSearch, MdMenu } from "react-icons/md";
import { IconContext } from "react-icons";

export default function Header() {

    return (
        <header>
            <section className="top">
                <div className="container h-100 d-flex justify-content-between align-items-center">
                    <a href="index.html" className="logo">
                        <img src="images/logo.svg" alt="Бизнес My Life" />
                    </a>
                    <form action="" className="header_search d-none d-lg-flex">
                        <input type="search" placeholder="Поиск по сайту" />
                        <button type="submit" className="btn_main">
                            <MdSearch />
                        </button>
                    </form>
                    <button type="button" className="d-none d-md-block color-2 bb_1 lh_1">Обратная связь</button>
                    <a href="" className="btn-icon">
                        <MdStarOutline />
                        <span className='count'>3</span>
                    </a>
                    <a href="" className="btn-icon">
                        <MdOutlineShoppingCart />
                        <span className='count'>3</span>
                    </a>
                    <a href="" className="link d-flex align-items-center">
                        <span className='d-none d-sm-inline f_12 me-2'>Войти</span>
                        <MdLogin className='f_15'/>
                    </a>
                </div>
            </section>
            <section className="bottom">
                <div className="container h-100 d-flex align-items-center justify-content-between py-1 py-lg-0">
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
                    <button className="d-lg-none" type="button">
                        <IconContext.Provider value={{className: "f_20 color-2" }}>
                            <MdMenu />
                        </IconContext.Provider>
                    </button>
                    <form action="" className="header_search d-flex d-lg-none">
                        <input type="search" placeholder="Поиск по сайту" className='py-2 px-2 px-sm-3'/>
                        <button type="submit" className="btn_main">
                            <MdSearch />
                        </button>
                    </form>
                </div>
            </section>
        </header>
    );
}