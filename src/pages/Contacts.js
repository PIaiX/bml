import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import Breadcrumbs from '../nav/Breadcrumbs';


export default function Contacts() {
    return (
        <main>
        <div className="container pt-4">
            <Breadcrumbs />
        </div>

        <section className="container">
            <h1 className="inner">Контакты</h1>
            <div className="pt f_11">
                <img src="images/logo-black.svg" alt="Бизнес My Life" className='mb-4'/>
                <div className="fw_7 mb-2 mb-sm-3">Прием звонков:</div>
                <div className="mb-4 mb-sm-5">Пн.-Пт.: 9:00 - 19:00 (по Москве)</div>
                <div className="fw_7 mb-2 mb-sm-3">Реквизиты:</div>
                <div className="mb-2">ИП. Найденов Р.А.</div>
                <div className="mb-2">ОГРНИП 313502929500012</div>
                <div className="mb-4 mb-sm-5">ИНН 890604287041</div>
                <div className="mb-4 mb-sm-5">Если у вас остались вопросы, напишите нам на <span className='blue'><a href="mailto:biznessmylife@mail.ru">biznessmylife@mail.ru</a></span></div>
                <h2>ФОРМА ОБРАТНОЙ СВЯЗИ</h2>

                <form>
                    <label for="client-name" className="mb-1">Ваше имя</label>
                    <input type="text" id="client-name" placeholder="имя" className="mb-3"/>
                    <label for="email" className="mb-1">Ваша почта</label>
                    <input type="email" id="email" placeholder="почта" className="mb-3"/>
                    <label for="question" className="mb-1">Ваш вопрос</label>
                    <textarea id="question" rows="3" placeholder="Ваш вопрос" className="mb-3"></textarea>
                    <label className="mt-2 mb-2">
                        <input type="checkbox" id="yes-register" required={true}/>
                        <span className='f_08 ms-2'>Я соглашаюсь с правилами сайта и даю согласие на <a href="/politic.php" target="_blank" className="bb_1">обработку персональных данных</a>.</span>
                    </label>
                    {/* <div className="checkbox mt-2 mb-2">
                        <input type="checkbox" id="yes-register" checked required/>
                        <label className="ml-1 color-1 f_09" for="yes-register"></label>
                    </div> */}
                    <button type="submit" className="btn_main btn_1 mt-3">Отправить</button>
                </form>
            </div>
        </section>

        <section class="bg_l_blue">
            <div id="block_5" class="container">
                <h2 class="mt-2">Наши партнёры</h2>
                <Swiper
                    className="pt-4 pb-5"
                    modules={[Pagination]}
                    slidesPerView={2}
                    spaceBetween={6}
                    pagination={{ 
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    breakpoints={{
                        576: {
                            slidesPerView: 3,
                            spaceBetween: 15,
                        },
                        768: {
                            slidesPerView: 5,
                            spaceBetween: 10,
                        },
                        992: {
                            slidesPerView: 6,
                            spaceBetween: 15,
                        },
                        1200: {
                            slidesPerView: 6,
                            spaceBetween: 30,
                        },
                    }}
                >
                    <SwiperSlide>
                        <img src="images/partners/image 10.jpg" alt="partners" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="images/partners/image 11.jpg" alt="partners" />
                    </SwiperSlide>
                    <SwiperSlide><img src="images/partners/image 12.jpg" alt="partners" /></SwiperSlide>
                    <SwiperSlide><img src="images/partners/image 13.jpg" alt="partners" /></SwiperSlide>
                    <SwiperSlide><img src="images/partners/image 14.jpg" alt="partners" /></SwiperSlide>
                    <SwiperSlide><img src="images/partners/image 15.jpg" alt="partners" /></SwiperSlide>
                    <SwiperSlide>
                        <img src="images/partners/image 10.jpg" alt="partners" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="images/partners/image 11.jpg" alt="partners" />
                    </SwiperSlide>
                    <SwiperSlide><img src="images/partners/image 12.jpg" alt="partners" /></SwiperSlide>
                    <SwiperSlide><img src="images/partners/image 13.jpg" alt="partners" /></SwiperSlide>
                    <SwiperSlide><img src="images/partners/image 14.jpg" alt="partners" /></SwiperSlide>
                    <SwiperSlide><img src="images/partners/image 15.jpg" alt="partners" /></SwiperSlide>
                </Swiper>
            </div>
        </section>
    </main>
    );
}