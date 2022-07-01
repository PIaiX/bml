import React from 'react';
import { Link } from 'react-router-dom';
import { MdAddCircle, MdOutlineArrowBack } from "react-icons/md";

export default function UserProfile() {
    return (
        <>
            <Link to="/account" className='color-1 f_11 fw_5 d-flex align-items-center d-lg-none mb-3 mb-sm-4'><MdOutlineArrowBack /> <span className='ms-2'>Назад</span></Link>
            <div class="acc-box">
                <div class="row">
                    <div class="col-md-4 mb-3 mb-sm-4 mb-md-0">
                        <h4 class="fw_7 text-center">Анна Петрова</h4>
                        <img src="/images/photo-replacer.jpg" alt="Анна Петрова" class="user-photo"/>
                        <div class="acc-box acc-friends mt-3 mt-xl-4">
                            <div className='d-flex d-md-block d-xl-flex align-items-center justify-content-between'>
                                <div>
                                    <span>Бизнес-партнёры</span> 
                                    <span class="l-gray ms-2">0</span>
                                </div>
                                <button type='button' className='blue mx-md-auto mx-xl-0 mt-md-2 mt-xl-0'>
                                    <MdAddCircle className='f_12'/>
                                    <span className='ms-1'>Добавить</span>
                                </button>
                            </div>
                            
                            <div class="row row-cols-3 g-3 mt-1">
                                <div>
                                    <img src="/images/photo-replacer.jpg" alt="Саша Петров"/>
                                    <div>Саша Петров</div>
                                </div>
                                <div>
                                    <img src="/images/photo-replacer.jpg" alt="Саша Петров"/>
                                    <div>Саша Петров</div>
                                </div>
                                <div>
                                    <img src="/images/photo-replacer.jpg" alt="Саша Петров"/>
                                    <div>Саша Петров</div>
                                </div>
                                <div>
                                    <img src="/images/photo-replacer.jpg" alt="Саша Петров"/>
                                    <div>Саша Петров</div>
                                </div>
                                <div>
                                    <img src="/images/photo-replacer.jpg" alt="Саша Петров"/>
                                    <div>Саша Петров</div>
                                </div>
                                <div>
                                    <img src="/images/photo-replacer.jpg" alt="Саша Петров"/>
                                    <div>Саша Петров</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div className='acc-box'>
                            <Link to='/account/settings' className='d-block blue f_09 mb-2 mb-sm-4'>Редактировать информацию</Link>
                            <div class="table-responsive">
                                <table class="table table-borderless acc-table mb-0">
                                    <tbody>
                                        <tr>
                                            <td class="l-gray">Дата рождения:</td>
                                            <td class="color-1">25 ноября 2020 г.</td>
                                        </tr>
                                        <tr>
                                            <td class="l-gray">Город:</td>
                                            <td class="color-1">Казань</td>
                                        </tr>
                                        <tr>
                                            <td class="l-gray">Место работы:</td>
                                            <td class="color-1">Предприниматель</td>
                                        </tr>
                                        <tr>
                                            <td class="l-gray">Хобби:</td>
                                            <td class="color-1">Бизнес</td>
                                        </tr>
                                        <tr>
                                            <td class="l-gray">Опыт в сферах:</td>
                                            <td class="color-1">Нет опыта</td>
                                        </tr>
                                        <tr>
                                            <td class="l-gray">Чем полезен ваш опыт:</td>
                                            <td class="color-1">Просто полезен</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        
                        <div class="acc-box mt-3 mt-m-4 mt-xl-5">
                            <div class="f_09 d-flex justify-content-between">
                                <div>Объявления <span class="l-gray">10</span></div>
                                <a href="/" class="color-1">Показать все</a>
                            </div>
                            <div className='row row-cols-3 g-1 g-sm-2 g-xl-4 text-center mt-1'>
                                <div>
                                    <div class="acc-box ads">
                                        <img src="/images/photo-replacer.jpg" alt="Франшиза" className='ads-img'/>
                                        <div class="fw_5 f_09 mt-2">Франшиза</div>
                                        <div class="gray f_09 mt-1">Образование</div>
                                    </div>
                                </div>
                                <div>
                                    <div class="acc-box ads">
                                        <img src="/images/photo-replacer.jpg" alt="Франшиза" className='ads-img'/>
                                        <div class="fw_5 f_09 mt-2">Франшиза</div>
                                        <div class="gray f_09 mt-1">Образование</div>
                                    </div>
                                </div>
                                <div>
                                    <div class="acc-box ads">
                                        <img src="/images/photo-replacer.jpg" alt="Франшиза" className='ads-img'/>
                                        <div class="fw_5 f_09 mt-2">Франшиза</div>
                                        <div class="gray f_09 mt-1">Образование</div>
                                    </div>
                                </div>
                                <div>
                                    <div class="acc-box ads">
                                        <img src="/images/photo-replacer.jpg" alt="Франшиза" className='ads-img'/>
                                        <div class="fw_5 f_09 mt-2">Франшиза</div>
                                        <div class="gray f_09 mt-1">Образование</div>
                                    </div>
                                </div>
                            </div>
                            {/* <div class="swiper-container swiper-acc-items">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                        
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="ads acc_box">
                                            <img src="images/offers/3.jpg" alt=""/>
                                            <div class="fw_5 f_09 mt-2">Франшиза</div>
                                            <div class="gray f_09 mt-1">Образование</div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="ads acc_box">
                                            <img src="images/offers/3.jpg" alt="" />
                                            <div class="fw_5 f_09 mt-2">Франшиза</div>
                                            <div class="gray f_09 mt-1">Образование</div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="ads acc_box">
                                            <img src="images/offers/3.jpg" alt="" />
                                            <div class="fw_5 f_09 mt-2">Франшиза</div>
                                            <div class="gray f_09 mt-1">Образование</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-button-prev"></div>
                                <div class="swiper-button-next">
                                    <img src="images/icons/next.png" alt="" />
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}