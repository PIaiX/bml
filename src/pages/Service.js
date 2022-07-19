import React from 'react';
import AdvPreview from '../components/AdvPreview';
import NewsPreview from '../components/NewsPreview';
import NewsMini from '../components/NewsMini';
import { MdCached } from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Service() {
    return (
        <main>
            <Swiper
                className="swiper-1"
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                <SwiperSlide>
                    <img src="/images/main_slider/slider.jpg" alt="Быстрый сервис поиска и подбора инвестиций"/>
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
                    <img src="/images/main_slider/slider.jpg" alt="Быстрый сервис поиска и подбора инвестиций"/>
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
                            <div><img src="/images/icons/icon-1.svg" alt="Поиск инвесторов" /></div>
                        </div>
                    </div>
                    <div>
                        <div className="white_box box_shad info_in_nums">
                            <div>
                                <div className="fw_5 mb-4">Поиск бизнес парнёров</div>
                                <div className="f_09 pt"><span className="color-2 fw_7">1650</span> будущих<br />партнёров по бизнесу</div>
                            </div>
                            <div><img src="/images/icons/icon-2.svg" alt="Поиск бизнес парнёров" /></div>
                        </div>
                    </div>
                    <div>
                        <div className="white_box box_shad info_in_nums">
                            <div>
                                <div className="fw_5 mb-4">Поиск инвесторов</div>
                                <div className="f_09 pt"><span className="color-2 fw_7">180</span> готовых бизнес проектов</div>
                            </div>
                            <div><img src="/images/icons/icon-3.svg" alt="Поиск инвесторов" /></div>
                        </div>
                    </div>
                    <div>
                        <div className="white_box box_shad info_in_nums">
                            <div>
                                <div className="fw_5 mb-4">Поиск инвесторов</div>
                                <div className="f_09 pt"><span className="color-2 fw_7">265</span> размещенных франшиз</div>
                            </div>
                            <div><img src="/images/icons/icon-4.svg" alt="Поиск инвесторов" /></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="block_3 container">
                <h1 className="inner mt-4">Поиск инвесторов</h1>
                <div className="filter mb-4">
                    <div className="filter_line_1">
                        <button className="order-2 order-sm-1" type="button" data-toggle="collapse" data-target="#collapseFilter" aria-expanded="true" id="btn-collapseFilter"></button>
                        <div className="order-1 order-sm-2 text-uppercase">Поиск по параметрам</div>
                        <div className="order-3">(Найдено: 515)</div>
                    </div>
                    <div className="collapse show" id="collapseFilter">
                        <div className="row">
                            <div className="col-sm-6 col-md-4 mb-3 mb-lg-4">
                                <select defaultValue={0}>
                                    <option value={0} disabled>Сфера бизнеса</option>
                                    <option value={1}>Сфера 1</option>
                                    <option value={2}>Сфера 2</option>
                                </select>
                            </div>
                            <div className="col-sm-6 col-md-4 mb-3 mb-lg-4">
                                <select defaultValue={0}>
                                    <option value={0} disabled>Категория</option>
                                    <option value={1}>Категория 1</option>
                                    <option value={2}>Категория 2</option>
                                </select>
                            </div>
                            <div className="col-sm-6 col-md-4 mb-3 mb-lg-4">
                                <select defaultValue={0}>
                                    <option value={0} disabled>Город</option>
                                    <option value={1}>Город 1</option>
                                    <option value={2}>Город 2</option>
                                </select>
                            </div>
                            <div className="col-sm-6 mb-3 mb-lg-4">
                                <select defaultValue={0}>
                                    <option value={0} disabled>Стадия реализации проекта</option>
                                    <option value={1}>Стадия 1</option>
                                    <option value={2}>Стадия 2</option>
                                </select>
                            </div>
                            <div className="col-sm-6 mb-3 mb-lg-4">
                                <select defaultValue={0}>
                                    <option value={0} disabled>Срок окупаемости, мес.</option>
                                    <option value={1}>Срок 1</option>
                                    <option value={2}>Срок 2</option>
                                </select>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-6 mb-3 mb-lg-4">
                                <div className="d-none d-md-block mb-1">Содержит слова:</div>
                                <input type="text" placeholder="Введите поисковую фразу" />
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3 mb-3 mb-lg-4">
                                <div className="mb-1">Объем инвестиций, руб.:</div>
                                <div className="d-flex align-items-center">
                                    <span className="me-2">от</span>
                                    <input type="number" placeholder="100" />
                                    <span className="mx-2">до</span>
                                    <input type="number" placeholder="100000" />
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3 mb-3 mb-lg-4">
                                <div className="mb-1">Оборот в месяц, руб.:</div>
                                <div className="d-flex align-items-center">
                                    <span className="me-2">от</span>
                                    <input type="number" placeholder="100"/>
                                    <span className="mx-2">до</span>
                                    <input type="number" placeholder="100000"/>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-end">
                            <button className="d-flex align-items-center">
                                <MdCached className='f_15' />
                                <span className="f_09 ms-2">Очистить фильтр</span>
                            </button>
                            <button className="btn_main btn_2 ms-3 ms-sm-4">Показать</button>
                        </div>
                    </div>
                </div>
                <div className="sort mb-4">
                    <nav aria-label="page-pagination">
                        <ul className="pagination">
                            <li className="page-item"><a className="page-link" href="/">❮</a></li>
                            <li className="page-item"><a className="page-link" href="/">1</a></li>
                            <li className="page-item"><a className="page-link" href="/">2</a></li>
                            <li className="page-item"><a className="page-link" href="/">3</a></li>
                            <li className="page-item"><a className="page-link" href="/">...</a></li>
                            <li className="page-item"><a className="page-link" href="/">46</a></li>
                            <li className="page-item"><a className="page-link" href="/">❯</a></li>
                        </ul>
                    </nav>
                    <div className="mr-2 mr-sm-0">Показано 24 <span className="d-none d-lg-inline">предложения из</span><span className="d-inline d-lg-none">/</span> 146</div>
                    <div className="d-flex align-items-center">
                        <span className="f_09 d-none d-lg-block">Сортировать:</span>
                        <select defaultValue={0} className="f_08 ms-2 pe-4">
                            <option value={0} disabled>по дате публикации</option>
                            <option value={1}>сначала новые</option>
                            <option value={2}>сначала старые</option>
                        </select>
                        <select defaultValue={0} className="f_08 ms-2 pe-4">
                            <option value={0}>по убыванию</option>
                            <option value={1}>по возрастанию</option>
                        </select>
                    </div>
                </div>

                <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-2 g-sm-3 g-xl-4">
                    <div className="col">
                        <AdvPreview url={"adv-page"} imgURL={"/images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'} fav={true}/>
                    </div>
                    <div className="col">
                        <AdvPreview url={"adv-page"} imgURL={"/images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div className="col">
                        <AdvPreview url={"adv-page"} imgURL={"/images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div className="col">
                        <AdvPreview url={"adv-page"} imgURL={"/images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div className="col">
                        <AdvPreview url={"adv-page"} imgURL={"/images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div className="col">
                        <AdvPreview url={"adv-page"} imgURL={"/images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div className="col">
                        <AdvPreview url={"adv-page"} imgURL={"/images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div className="col">
                        <AdvPreview url={"adv-page"} imgURL={"/images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div className="col-12 w-100">
                        <Swiper
                            className="preview-slider"
                            modules={[Pagination]}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                        >
                            <SwiperSlide>
                                <img src="/images/slider_offers/slide1.jpg" alt="" className="img-fluid" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/slider_offers/slide2.jpg" alt="" className="img-fluid" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="col">
                        <AdvPreview url={"adv-page"} imgURL={"/images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'} fav={true}/>
                    </div>
                    <div className="col">
                        <AdvPreview url={"adv-page"} imgURL={"/images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div className="col">
                        <AdvPreview url={"adv-page"} imgURL={"/images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div className="col">
                        <AdvPreview url={"adv-page"} imgURL={"/images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div className="col">
                        <AdvPreview url={"adv-page"} imgURL={"/images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div className="col">
                        <AdvPreview url={"adv-page"} imgURL={"/images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div className="col">
                        <AdvPreview url={"adv-page"} imgURL={"/images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                    <div className="col">
                        <AdvPreview url={"adv-page"} imgURL={"/images/offers/3.jpg"} title={"English 1st - франшиза школы иностранных языков"} summ={'400000'}/>
                    </div>
                </div>

                <div className="sort mb-4">
                    <nav aria-label="page-pagination">
                        <ul className="pagination">
                            <li className="page-item"><a className="page-link" href="/">❮</a></li>
                            <li className="page-item"><a className="page-link" href="/">1</a></li>
                            <li className="page-item"><a className="page-link" href="/">2</a></li>
                            <li className="page-item"><a className="page-link" href="/">3</a></li>
                            <li className="page-item"><a className="page-link" href="/">...</a></li>
                            <li className="page-item"><a className="page-link" href="/">46</a></li>
                            <li className="page-item"><a className="page-link" href="/">❯</a></li>
                        </ul>
                    </nav>
                    <div className="mr-2 mr-sm-0">Показано 24 <span className="d-none d-lg-inline">предложения из</span><span className="d-inline d-lg-none">/</span> 146</div>
                    <div className="d-flex align-items-center">
                        <span className="f_09 d-none d-lg-block">Сортировать:</span>
                        <select defaultValue={0} className="f_08 ms-2 pe-4">
                            <option value={0} disabled>по дате публикации</option>
                            <option value={1}>сначала новые</option>
                            <option value={2}>сначала старые</option>
                        </select>
                        <select defaultValue={0} className="f_08 ms-2 pe-4">
                            <option value={0}>по убыванию</option>
                            <option value={1}>по возрастанию</option>
                        </select>
                    </div>
                </div>
            </section>

            <section className="container" id="block_4">
                <h2>Новости и статьи</h2>
                <div className="row">
                    <div className="col-md-4 col-lg-3 mb-sm-3 mb-md-0 pt-3">
                        <NewsMini className={'mb-3 mb-md-4'} url={'/news-0'} date={'28.09.2020'} title={'Как малому бизнесу выживать в условиях коронавируса'}/>
                        <NewsMini className={'mb-3 mb-md-4'} url={'/news-0'} date={'28.09.2020'} title={'Как малому бизнесу выживать в условиях коронавируса'}/>
                        <NewsMini className={'mb-3 mb-md-4'} url={'/news-0'} date={'28.09.2020'} title={'Как малому бизнесу выживать в условиях коронавируса'}/>
                        <div className="color-1"><a href="news.html" className="bb_1 fw_5 link">Все новости</a></div>
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
                                <NewsPreview url={'/news-0'} imgUrl={"/images/news/n1.jpg"} title={"Как малому бизнесу выживать в условиях коронавируса"} text={"Сейчас бесконтактные бизнес-процедуры — оптимальный вариант ведения бизнеса."}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <NewsPreview url={'/news-0'} imgUrl={"/images/news/n1.jpg"} title={"Как малому бизнесу выживать в условиях коронавируса"} text={"Сейчас бесконтактные бизнес-процедуры — оптимальный вариант ведения бизнеса."}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <NewsPreview url={'/news-0'} imgUrl={"/images/news/n1.jpg"} title={"Как малому бизнесу выживать в условиях коронавируса"} text={"Сейчас бесконтактные бизнес-процедуры — оптимальный вариант ведения бизнеса."}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <NewsPreview url={'/news-0'} imgUrl={"/images/news/n1.jpg"} title={"Как малому бизнесу выживать в условиях коронавируса"} text={"Сейчас бесконтактные бизнес-процедуры — оптимальный вариант ведения бизнеса."}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <NewsPreview url={'/news-0'} imgUrl={"/images/news/n1.jpg"} title={"Как малому бизнесу выживать в условиях коронавируса"} text={"Сейчас бесконтактные бизнес-процедуры — оптимальный вариант ведения бизнеса."}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <NewsPreview url={'/news-0'} imgUrl={"/images/news/n1.jpg"} title={"Как малому бизнесу выживать в условиях коронавируса"} text={"Сейчас бесконтактные бизнес-процедуры — оптимальный вариант ведения бизнеса."}/>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>

            <section className="bg_l_blue">
                <div id="block_5" className="container">
                    <h2 className="mt-2">Наши партнёры</h2>
                    <Swiper
                        className="pt-3 pb-5"
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
                            <img src="/images/partners/image 10.jpg" alt="partners" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/partners/image 11.jpg" alt="partners" />
                        </SwiperSlide>
                        <SwiperSlide><img src="/images/partners/image 12.jpg" alt="partners" /></SwiperSlide>
                        <SwiperSlide><img src="/images/partners/image 13.jpg" alt="partners" /></SwiperSlide>
                        <SwiperSlide><img src="/images/partners/image 14.jpg" alt="partners" /></SwiperSlide>
                        <SwiperSlide><img src="/images/partners/image 15.jpg" alt="partners" /></SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/partners/image 10.jpg" alt="partners" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/partners/image 11.jpg" alt="partners" />
                        </SwiperSlide>
                        <SwiperSlide><img src="/images/partners/image 12.jpg" alt="partners" /></SwiperSlide>
                        <SwiperSlide><img src="/images/partners/image 13.jpg" alt="partners" /></SwiperSlide>
                        <SwiperSlide><img src="/images/partners/image 14.jpg" alt="partners" /></SwiperSlide>
                        <SwiperSlide><img src="/images/partners/image 15.jpg" alt="partners" /></SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </main>
    );
}