import React from 'react';

export default function Footer() {
    return (
        <>
        <footer>
            <div className="container d-none d-md-block">
                <div className="row">
                    <div className="col-sm-6 col-md-4 col-lg-3 mb-4 mb-sm-0 ">
                        <img src="images/logo.svg" alt="Бизнес My Life" className="f-logo mb-3" />
                        <div className="text-uppercase">Мы в социальных сетях</div>
                        <div className="footer-social">
                            <a href="#" className="soc-icon"><img src="images/icons/facebook.svg" alt="Facebook" /></a>
                            <a href="#" className="soc-icon"><img src="images/icons/vk.svg" alt="vk" /></a>
                            <a href="#" className="soc-icon"><img src="images/icons/instagram.svg" alt="instagram" /></a>
                        </div>
                        <div className='d-md-none'>КАРТА САЙТА</div>
                        <nav className="footer-nav d-md-none">
                            <ul>
                                <li><a href="category.html">Поиск инвесторов</a></li>
                                <li><a href="#category.html">предложения инвесторов</a></li>
                                <li><a href="category.html">поиск бизнес партнёров</a></li>
                                <li><a href="category.html">продажа бизнеса</a></li>
                                <li><a href="category.html">франшиза</a></li>
                                <li><a href="contacts.html">Контакты</a></li>
                                <li><a href="news.html">Новости</a></li>
                                <li><a href="#">Политика конфиденциальности</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-sm-6 col-md-8 col-lg-9">
                        <div className="row">
                            <div className="col-md-6 d-none d-md-block">
                                <nav className="footer-nav">
                                    <ul>
                                        <li><a href="category.html">Поиск инвесторов</a></li>
                                        <li><a href="#category.html">предложения инвесторов</a></li>
                                        <li><a href="category.html">поиск бизнес партнёров</a></li>
                                        <li><a href="category.html">продажа бизнеса</a></li>
                                        <li><a href="category.html">франшиза</a></li>
                                        <li><a href="contacts.html">Контакты</a></li>
                                        <li><a href="news.html">Новости</a></li>
                                        <li><a href="#">Политика конфиденциальности</a></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="col-md-6">
                                <div className="text-uppercase mb-3">Подпишитесь на новости: выгодные бизнес предложения, лучшие франшизы и проекты</div>
                                <form action="" className="mailing-form">
                                    <div className="d-flex mb-2">
                                        <input type="text" className='white' placeholder="Введите e-mail" />
                                        <button type="submit" className="btn_main btn_2">OK</button>
                                    </div>
                                    <label>
                                        <input type="checkbox" required={true}/>
                                        <span className='ms-2'>Согласен на обработку персональных данных</span>
                                    </label>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container h-100 d-md-none">
                <nav className='h-100'>
                    <ul className='h-100 list-unstyled d-flex justify-content-between align-items-center'>
                        <li>
                            <a>
                                <img src="images/icons/home.png" alt="Главная" />
                                <div>Главная</div>
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src="images/icons/favorites.png" alt="Избранное" />
                                <div>Избранное</div>
                                <div className='count'>3</div>
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src="images/icons/ads.png" alt="Объявления" />
                                <div>Объявления</div>
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src="images/icons/messages.png" alt="Сообщения" />
                                <div>Сообщения</div>
                                <div className='count'>3</div>
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src="images/icons/profile.png" alt="Профиль" />
                                <div>Профиль</div>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
     </>
    )
}