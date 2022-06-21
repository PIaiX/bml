import React from 'react';
import AdvPreview from '../components/AdvPreview';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import NewsPreview from '../components/NewsPreview';


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
                    <img src="images/main_slider/slider.jpg" alt="Быстрый сервис поиска и подбора инвестиций"/>
                    <div className="container white">
                        <div className="row">
                            <div className="col-md-9 col-lg-7">
                                <h2>
                                    Быстрый сервис поиска и подбора инвестиций
                                </h2>
                                <p className="pt f_12">Мы собрали у себя лучшие предложения на рынке бизнеса, чтобы вы могли сравнить предложения и выбрать то, что действительно вам подходит</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="images/main_slider/slider.jpg" alt="Быстрый сервис поиска и подбора инвестиций"/>
                    <div className="container white">
                        <div className="row">
                            <div className="col-md-9 col-lg-7">
                                <h2>
                                    Быстрый сервис поиска и подбора инвестиций
                                </h2>
                                <p className="pt f_12">Мы собрали у себя лучшие предложения на рынке бизнеса, чтобы вы могли сравнить предложения и выбрать то, что действительно вам подходит</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            <section id="block_2" class="container">
                <div class="row row-cols-sm-2 row-cols-md-3 row-cols-lg-4 justify-content-center g-4">
                    <div>
                        <div class="white_box box_shad info_in_nums">
                            <div>
                                <div class="fw_5 mb-4">Поиск инвесторов</div>
                                <div class="f_09 pt"><span class="color-2 fw_7">2650</span> зарегестрированных инвесторов</div>
                            </div>
                            <div><img src="images/icons/icon-1.svg" alt="Поиск инвесторов" /></div>
                        </div>
                    </div>
                    <div>
                        <div class="white_box box_shad info_in_nums">
                            <div>
                                <div class="fw_5 mb-4">Поиск бизнес парнёров</div>
                                <div class="f_09 pt"><span class="color-2 fw_7">1650</span> будущих<br />партнёров по бизнесу</div>
                            </div>
                            <div><img src="images/icons/icon-2.svg" alt="Поиск бизнес парнёров" /></div>
                        </div>
                    </div>
                    <div>
                        <div class="white_box box_shad info_in_nums">
                            <div>
                                <div class="fw_5 mb-4">Поиск инвесторов</div>
                                <div class="f_09 pt"><span class="color-2 fw_7">180</span> готовых бизнес проектов</div>
                            </div>
                            <div><img src="images/icons/icon-3.svg" alt="Поиск инвесторов" /></div>
                        </div>
                    </div>
                    <div>
                        <div class="white_box box_shad info_in_nums">
                            <div>
                                <div class="fw_5 mb-4">Поиск инвесторов</div>
                                <div class="f_09 pt"><span class="color-2 fw_7">265</span> размещенных франшиз</div>
                            </div>
                            <div><img src="images/icons/icon-4.svg" alt="Поиск инвесторов" /></div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="bg_l_blue">
                <div class="container" id="block_3">
                    <h1>Главный заголовок</h1>
                    <div class="row align-items-center">
                        <div class="col-12 col-md-4 mb-4 mb-md-0">
                            <video controls>
                            <source src="video/video.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div class="col-12 col-md-8">
                            <p class="f_12 pt">Посмотрите видео о работе портала: для инвесторов и партнеров, с помощью которого, не отрываясь от бизнес процессов, можно рассматривать перспективные проекты и узнавать о трендах рынка</p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="block_3 container">
                <h2 class="mt-4">Поиск инвестора</h2>
                <div class="row g-2 g-sm-3 g-xl-4">
                    <div class="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"page.html"} imgURL={"images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'} fav={true}/>
                    </div>
                    <div class="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"page.html"} imgURL={"images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div class="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"page.html"} imgURL={"images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div class="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"page.html"} imgURL={"images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div class="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"page.html"} imgURL={"images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div class="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"page.html"} imgURL={"images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div class="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"page.html"} imgURL={"images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div class="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"page.html"} imgURL={"images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                </div>
                <button class="btn_main btn_1 mx-auto mt-4">Показать еще</button>
            </section>

            <section class="block_3 container">
                <h2>предложения инвесторов</h2>
                <div class="row g-2 g-sm-3 g-xl-4">
                    <div class="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"page.html"} imgURL={"images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div class="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"page.html"} imgURL={"images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div class="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"page.html"} imgURL={"images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div class="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"page.html"} imgURL={"images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div class="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"page.html"} imgURL={"images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div class="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"page.html"} imgURL={"images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div class="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"page.html"} imgURL={"images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div class="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"page.html"} imgURL={"images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                </div>
                <button class="btn_main btn_1 mx-auto mt-4">Показать еще</button>
            </section>

            <section class="block_3 container">
                <h2>Поиск бизнес партнёров</h2>
                <div class="row g-2 g-sm-3 g-xl-4">
                    <div class="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"page.html"} imgURL={"images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div class="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"page.html"} imgURL={"images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div class="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"page.html"} imgURL={"images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div class="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"page.html"} imgURL={"images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div class="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"page.html"} imgURL={"images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div class="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"page.html"} imgURL={"images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div class="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"page.html"} imgURL={"images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div class="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"page.html"} imgURL={"images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                </div>
                <button class="btn_main btn_1 mx-auto mt-4">Показать еще</button>
            </section>

            <section class="block_3 container">
                <h2>Продажа бизнеса</h2>
                <div class="row g-2 g-sm-3 g-xl-4">
                    <div class="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"page.html"} imgURL={"images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div class="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"page.html"} imgURL={"images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div class="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"page.html"} imgURL={"images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div class="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"page.html"} imgURL={"images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div class="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"page.html"} imgURL={"images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div class="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"page.html"} imgURL={"images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div class="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"page.html"} imgURL={"images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div class="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"page.html"} imgURL={"images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                </div>
                <button class="btn_main btn_1 mx-auto mt-4">Показать еще</button>
            </section>

            <section class="block_3 container">
                <h2>Франшизы</h2>
                <div class="row g-2 g-sm-3 g-xl-4">
                    <div class="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"page.html"} imgURL={"images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div class="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"page.html"} imgURL={"images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div class="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"page.html"} imgURL={"images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div class="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"page.html"} imgURL={"images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div class="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"page.html"} imgURL={"images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div class="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"page.html"} imgURL={"images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div class="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"page.html"} imgURL={"images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div class="col-6 col-md-4 col-lg-3">
                        <AdvPreview url={"page.html"} imgURL={"images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                </div>
                <button class="btn_main btn_1 mx-auto mt-4">Показать еще</button>
            </section>

            <section class="container" id="block_4">
                <h2>Новости и статьи</h2>
                <div class="row">
                    <div class="col-md-4 col-lg-3 mb-4 mb-md-0">
                        <div class="row">
                            <div class="col-sm-6 col-md-12">
                                <article class="news_preview_mini mb-4">
                                    <time class="fw_7 mb-1">28.09.2020</time>
                                    <a href="news-page.html" class="d-block title pt">Как малому бизнесу выживать в условиях коронавируса</a>
                                </article>
                            </div>
                            <div class="col-sm-6 col-md-12">
                                <article class="news_preview_mini mb-4">
                                    <time class="fw_7 mb-1">28.09.2020</time>
                                    <a href="news-page.html" class="d-block title pt">Как малому бизнесу выживать в условиях коронавируса</a>
                                </article>
                            </div>
                            <div class="d-none d-md-block col-sm-6 col-md-12">
                                <article class="news_preview_mini mb-4">
                                    <time class="fw_7 mb-1">28.09.2020</time>
                                    <a href="news-page.html" class="d-block title pt">Как малому бизнесу выживать в условиях коронавируса</a>
                                </article>
                            </div>
                        </div>
                        <div class="color-1"><a href="news.html" class="bb_1 fw_5">Все новости</a></div>
                    </div>
                    <div class="col-md-8 col-lg-9">
                        <Swiper
                            className="pt-4 pb-5"
                            modules={[Pagination]}
                            slidesPerView={3}
                            spaceBetween={16}
                            pagination={{ clickable: true }}
                        >
                            <SwiperSlide>
                                <NewsPreview url={"images/news/n1.jpg"} title={"Как малому бизнесу выживать в условиях коронавируса"} text={"Сейчас бесконтактные бизнес-процедуры — оптимальный вариант ведения бизнеса."}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <NewsPreview url={"images/news/n1.jpg"} title={"Как малому бизнесу выживать в условиях коронавируса"} text={"Сейчас бесконтактные бизнес-процедуры — оптимальный вариант ведения бизнеса."}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <NewsPreview url={"images/news/n1.jpg"} title={"Как малому бизнесу выживать в условиях коронавируса"} text={"Сейчас бесконтактные бизнес-процедуры — оптимальный вариант ведения бизнеса."}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <NewsPreview url={"images/news/n1.jpg"} title={"Как малому бизнесу выживать в условиях коронавируса"} text={"Сейчас бесконтактные бизнес-процедуры — оптимальный вариант ведения бизнеса."}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <NewsPreview url={"images/news/n1.jpg"} title={"Как малому бизнесу выживать в условиях коронавируса"} text={"Сейчас бесконтактные бизнес-процедуры — оптимальный вариант ведения бизнеса."}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <NewsPreview url={"images/news/n1.jpg"} title={"Как малому бизнесу выживать в условиях коронавируса"} text={"Сейчас бесконтактные бизнес-процедуры — оптимальный вариант ведения бизнеса."}/>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>

            <section class="bg_l_blue">
                <div id="block_5" class="container">
                    <h2 class="mt-2">Наши партнёры</h2>
                    <Swiper
                        className="pt-4 pb-5"
                        modules={[Pagination]}
                        slidesPerView={6}
                        spaceBetween={30}
                        pagination={{ clickable: true }}
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