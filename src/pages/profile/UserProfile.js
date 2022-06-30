import React from 'react';
import { MdAddCircle } from "react-icons/md";

export default function UserProfile() {
    return (
        <div class="acc-box">
            <div class="row">
                <div class="col-lg-4 mb-4 mb-sm-0">
                    <h4 class="fw_7 text-center">Анна Петрова</h4>
                    <div class="row">
                        <div class="col-sm-6 col-lg-12 mb-4">
                            <img src="/images/photo-replacer.jpg" alt="Анна Петрова" class="user-photo"/>
                        </div>
                        <div class="col-sm-6 col-lg-12">
                            <div class="acc-box f_08">
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <span>Бизнес-партнёры</span> 
                                        <span class="l-gray ms-2">0</span>
                                    </div>
                                    <button type='button' className='color-1'>
                                        <MdAddCircle className='f_12'/>
                                        <span className='ms-1'>Добавить</span>
                                    </button>
                                </div>
                                
                                <div class="acc-friends row row-cols-4 mt-3">
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
                    </div>
                </div>
                <div class="col-lg-8">
                    <div className='acc-box'>
                        <button type='button' className='color-1 f_09 mb-4'>Редактировать информацию</button>
                        <div class="table-responsive">
                            <table class="table table-borderless table-sm f_09 acc_info_table">
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
                            </table>
                        </div>
                    </div>
                    
                    <div class="acc-box mt-5">
                        <div class="f_09 d-flex justify-content-between mb-2">
                            <div>Объявления <span class="l-gray">10</span></div>
                            <a href="#" class="color-1">Показать все</a>
                        </div>
                        <div className='row row-cols-3 g-4'>
                            <div>
                                <div class="acc-box">
                                    <img src="/images/photo-replacer.jpg" alt="Франшиза" className='img-fluid'/>
                                    <div class="fw_5 f_09 mt-2">Франшиза</div>
                                    <div class="gray f_09 mt-1">Образование</div>
                                </div>
                            </div>
                            <div>
                                <div class="acc-box">
                                    <img src="/images/photo-replacer.jpg" alt="Франшиза" className='img-fluid'/>
                                    <div class="fw_5 f_09 mt-2">Франшиза</div>
                                    <div class="gray f_09 mt-1">Образование</div>
                                </div>
                            </div>
                            <div>
                                <div class="acc-box">
                                    <img src="/images/photo-replacer.jpg" alt="Франшиза" className='img-fluid'/>
                                    <div class="fw_5 f_09 mt-2">Франшиза</div>
                                    <div class="gray f_09 mt-1">Образование</div>
                                </div>
                            </div>
                            <div>
                                <div class="acc-box">
                                    <img src="/images/photo-replacer.jpg" alt="Франшиза" className='img-fluid'/>
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
    );
}