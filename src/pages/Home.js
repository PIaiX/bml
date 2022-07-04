import React from 'react';
import AdvPreview from '../components/AdvPreview';
import Partners from '../components/Partners';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import NewsPreview from '../components/NewsPreview';
import NewsMini from '../components/NewsMini';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/pagination';

export default function Home() {
    return (
        <main>
            <Swiper
                className="swiper-1"
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                <SwiperSlide>
                    <img src="/bml/images/main_slider/slider.jpg" alt="Быстрый сервис поиска и подбора инвестиций"/>
                    <div className="container white">
                        <div className="row">
                            <div className="col-md-9 col-lg-7">
                                <h2>Быстрый сервис поиска и подбора инвестиций</h2>
                                <h5>Мы собрали у себя лучшие предложения на рынке бизнеса, чтобы вы могли сравнить предложения и выбрать то, что действительно вам подходит</h5>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/bml/images/main_slider/slider.jpg" alt="Быстрый сервис поиска и подбора инвестиций"/>
                    <div className="container white">
                        <div className="row">
                            <div className="col-md-9 col-lg-7">
                                <h2>Быстрый сервис поиска и подбора инвестиций</h2>
                                <h5>Мы собрали у себя лучшие предложения на рынке бизнеса, чтобы вы могли сравнить предложения и выбрать то, что действительно вам подходит</h5>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            <section id="block_2" className="container">
                <div className="row row-cols-sm-2 row-cols-md-3 row-cols-lg-4 justify-content-center g-4">
                    <div>
                        <div className="white_box box_shad info_in_nums">
                            <div>
                                <div className="fw_5 mb-4">Поиск инвесторов</div>
                                <div className="f_09 pt"><span className="color-2 fw_7">2650</span> зарегестрированных инвесторов</div>
                            </div>
                            <div><img src="/bml/images/icons/icon-1.svg" alt="Поиск инвесторов" /></div>
                        </div>
                    </div>
                    <div>
                        <div className="white_box box_shad info_in_nums">
                            <div>
                                <div className="fw_5 mb-4">Поиск бизнес парнёров</div>
                                <div className="f_09 pt"><span className="color-2 fw_7">1650</span> будущих<br />партнёров по бизнесу</div>
                            </div>
                            <div><img src="/bml/images/icons/icon-2.svg" alt="Поиск бизнес парнёров" /></div>
                        </div>
                    </div>
                    <div>
                        <div className="white_box box_shad info_in_nums">
                            <div>
                                <div className="fw_5 mb-4">Поиск инвесторов</div>
                                <div className="f_09 pt"><span className="color-2 fw_7">180</span> готовых бизнес проектов</div>
                            </div>
                            <div><img src="/bml/images/icons/icon-3.svg" alt="Поиск инвесторов" /></div>
                        </div>
                    </div>
                    <div>
                        <div className="white_box box_shad info_in_nums">
                            <div>
                                <div className="fw_5 mb-4">Поиск инвесторов</div>
                                <div className="f_09 pt"><span className="color-2 fw_7">265</span> размещенных франшиз</div>
                            </div>
                            <div><img src="/bml/images/icons/icon-4.svg" alt="Поиск инвесторов" /></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg_l_blue">
                <div className="container" id="block_3">
                    <h1>Главный заголовок</h1>
                    <div className="row align-items-center">
                        <div className="col-12 col-md-4 mb-4 mb-md-0">
                            <video controls>
                                <source src="/bml/video/video.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div className="col-12 col-md-8 col-xl-7 col-xxl-6">
                            <p className="f_12 pt">Посмотрите видео о работе портала: для инвесторов и партнеров, с помощью которого, не отрываясь от бизнес процессов, можно рассматривать перспективные проекты и узнавать о трендах рынка</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="block_3 container">
                <h2 className="mt-4">Поиск инвесторов</h2>
                <div className="row g-2 g-sm-3 g-xl-4">
                    <div className="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"adv-page"} imgURL={"/bml/images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'} fav={true}/>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"adv-page"} imgURL={"/bml/images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"adv-page"} imgURL={"/bml/images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"adv-page"} imgURL={"/bml/images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"adv-page"} imgURL={"/bml/images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"adv-page"} imgURL={"/bml/images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"adv-page"} imgURL={"/bml/images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"adv-page"} imgURL={"/bml/images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                </div>
                <button className="btn_main btn_1 mx-auto mt-4">Показать еще</button>
            </section>

            <section className="block_3 container">
                <h2>предложения инвесторов</h2>
                <div className="row g-2 g-sm-3 g-xl-4">
                    <div className="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"adv-page"} imgURL={"/bml/images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"adv-page"} imgURL={"/bml/images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"adv-page"} imgURL={"/bml/images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"adv-page"} imgURL={"/bml/images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"adv-page"} imgURL={"/bml/images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"adv-page"} imgURL={"/bml/images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"adv-page"} imgURL={"/bml/images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"adv-page"} imgURL={"/bml/images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                </div>
                <button className="btn_main btn_1 mx-auto mt-4">Показать еще</button>
            </section>

            <section className="block_3 container">
                <h2>Поиск бизнес партнёров</h2>
                <div className="row g-2 g-sm-3 g-xl-4">
                    <div className="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"adv-page"} imgURL={"/bml/images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"adv-page"} imgURL={"/bml/images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"adv-page"} imgURL={"/bml/images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"adv-page"} imgURL={"/bml/images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"adv-page"} imgURL={"/bml/images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"adv-page"} imgURL={"/bml/images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"adv-page"} imgURL={"/bml/images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"adv-page"} imgURL={"/bml/images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                </div>
                <button className="btn_main btn_1 mx-auto mt-4">Показать еще</button>
            </section>

            <section className="block_3 container">
                <h2>Продажа бизнеса</h2>
                <div className="row g-2 g-sm-3 g-xl-4">
                    <div className="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"adv-page"} imgURL={"/bml/images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"adv-page"} imgURL={"/bml/images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"adv-page"} imgURL={"/bml/images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"adv-page"} imgURL={"/bml/images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"adv-page"} imgURL={"/bml/images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"adv-page"} imgURL={"/bml/images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"adv-page"} imgURL={"/bml/images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"adv-page"} imgURL={"/bml/images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                </div>
                <button className="btn_main btn_1 mx-auto mt-4">Показать еще</button>
            </section>

            <section className="block_3 container">
                <h2>Франшизы</h2>
                <div className="row g-2 g-sm-3 g-xl-4">
                    <div className="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"adv-page"} imgURL={"/bml/images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"adv-page"} imgURL={"/bml/images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"adv-page"} imgURL={"/bml/images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"adv-page"} imgURL={"/bml/images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"adv-page"} imgURL={"/bml/images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"adv-page"} imgURL={"/bml/images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"adv-page"} imgURL={"/bml/images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"adv-page"} imgURL={"/bml/images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                </div>
                <button className="btn_main btn_1 mx-auto mt-4">Показать еще</button>
            </section>

            <section className="container" id="block_4">
                <h2>Новости и статьи</h2>
                <div className="row">
                    <div className="col-md-4 col-lg-3 mb-sm-3 mb-md-0 pt-3">
                        <NewsMini className={'mb-3 mb-md-4'} url={'news/news-0'} date={'28.09.2020'} title={'Как малому бизнесу выживать в условиях коронавируса'}/>
                        <NewsMini className={'mb-3 mb-md-4'} url={'news/news-0'} date={'28.09.2020'} title={'Как малому бизнесу выживать в условиях коронавируса'}/>
                        <NewsMini className={'mb-3 mb-md-4'} url={'news/news-0'} date={'28.09.2020'} title={'Как малому бизнесу выживать в условиях коронавируса'}/>
                        <div className="color-1"><Link to="/news" className="bb_1 fw_5 link">Все новости</Link></div>
                    </div>
                    <div className="col-md-8 col-lg-9">
                        <Swiper
                            className="pt-3 pb-5"
                            modules={[Pagination]}
                            slidesPerView={1}
                            spaceBetween={16}
                            pagination={{ 
                                clickable: true,
                                dynamicBullets: true,
                            }}
                            breakpoints={{
                                576: {
                                  slidesPerView: 2,
                                  spaceBetween: 16,
                                },
                                992: {
                                  slidesPerView: 3,
                                  spaceBetween: 16,
                                },
                            }}
                        >
                            <SwiperSlide>
                                <NewsPreview url={'news/news-0'} imgUrl={"/bml/images/news/n1.jpg"} title={"Как малому бизнесу выживать в условиях коронавируса"} text={"Сейчас бесконтактные бизнес-процедуры — оптимальный вариант ведения бизнеса."}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <NewsPreview url={'news/news-0'} imgUrl={"/bml/images/news/n1.jpg"} title={"Как малому бизнесу выживать в условиях коронавируса"} text={"Сейчас бесконтактные бизнес-процедуры — оптимальный вариант ведения бизнеса."}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <NewsPreview url={'news/news-0'} imgUrl={"/bml/images/news/n1.jpg"} title={"Как малому бизнесу выживать в условиях коронавируса"} text={"Сейчас бесконтактные бизнес-процедуры — оптимальный вариант ведения бизнеса."}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <NewsPreview url={'news/news-0'} imgUrl={"/bml/images/news/n1.jpg"} title={"Как малому бизнесу выживать в условиях коронавируса"} text={"Сейчас бесконтактные бизнес-процедуры — оптимальный вариант ведения бизнеса."}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <NewsPreview url={'news/news-0'} imgUrl={"/bml/images/news/n1.jpg"} title={"Как малому бизнесу выживать в условиях коронавируса"} text={"Сейчас бесконтактные бизнес-процедуры — оптимальный вариант ведения бизнеса."}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <NewsPreview url={'news/news-0'} imgUrl={"/bml/images/news/n1.jpg"} title={"Как малому бизнесу выживать в условиях коронавируса"} text={"Сейчас бесконтактные бизнес-процедуры — оптимальный вариант ведения бизнеса."}/>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>

            <Partners />
        </main>
    );
}