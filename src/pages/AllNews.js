import React from 'react';
import NewsPreview from '../components/NewsPreview';
import NewsMini from '../components/NewsMini';
import Partners from '../components/Partners';
import Breadcrumbs from '../nav/Breadcrumbs';

export default function AllNews() {
    return (
        <main>
        <div className="container py-4">
            <Breadcrumbs />

            <section>
                <div className="sort">
                    <nav aria-label="page-pagination">
                        <ul className="pagination">
                            <li className="page-item"><a className="page-link" href="#">❮</a></li>
                            <li className="page-item active"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item"><a className="page-link" href="#">...</a></li>
                            <li className="page-item"><a className="page-link" href="#">46</a></li>
                            <li className="page-item"><a className="page-link" href="#">❯</a></li>
                        </ul>
                    </nav>
                    <div className="mr-2 mr-sm-0">Показано 24<span className="d-none d-lg-inline"> статьи и новости</span></div>
                    <div className="d-flex align-items-center">
                        <span className="f_09 d-none d-lg-block">Сортировать:</span>
                        <select className="f_08 ms-3 pe-4">
                            <option selected disabled>по дате публикации</option>
                            <option value="сначала новые">сначала новые</option>
                            <option value="сначала старые">сначала старые</option>
                        </select>
                    </div>
                </div>
                <div className="mt-5" id="block_4">
                    <div className="row">
                        <div className="col-md-4 col-lg-3 mb-4 mb-md-0">
                            <NewsMini className={'mb-3 mb-md-4'} url={'news-page.html'} date={'28.09.2020'} title={'Как малому бизнесу выживать в условиях коронавируса'}/>
                            <NewsMini className={'mb-3 mb-md-4'} url={'news-page.html'} date={'28.09.2020'} title={'Как малому бизнесу выживать в условиях коронавируса'}/>
                            <NewsMini className={'mb-3 mb-md-4'} url={'news-page.html'} date={'28.09.2020'} title={'Как малому бизнесу выживать в условиях коронавируса'}/>
                        </div>
                        <div className="col-md-8 col-lg-9">
                            <div className="row row-cols-sm-2 row-cols-lg-3 g-3 g-xl-4">
                                <div>
                                    <NewsPreview url={'/news-0'} imgUrl={"images/news/n1.jpg"} title={"Как малому бизнесу выживать в условиях коронавируса"} text={"Сейчас бесконтактные бизнес-процедуры — оптимальный вариант ведения бизнеса."}/>
                                </div>
                                <div>
                                    <NewsPreview url={'/news-0'} imgUrl={"images/news/n1.jpg"} title={"Как малому бизнесу выживать в условиях коронавируса"} text={"Сейчас бесконтактные бизнес-процедуры — оптимальный вариант ведения бизнеса."}/>
                                </div>
                                <div>
                                    <NewsPreview url={'/news-0'} imgUrl={"images/news/n1.jpg"} title={"Как малому бизнесу выживать в условиях коронавируса"} text={"Сейчас бесконтактные бизнес-процедуры — оптимальный вариант ведения бизнеса."}/>
                                </div>
                                <div>
                                    <NewsPreview url={'/news-0'} imgUrl={"images/news/n1.jpg"} title={"Как малому бизнесу выживать в условиях коронавируса"} text={"Сейчас бесконтактные бизнес-процедуры — оптимальный вариант ведения бизнеса."}/>
                                </div>
                                <div>
                                    <NewsPreview url={'/news-0'} imgUrl={"images/news/n1.jpg"} title={"Как малому бизнесу выживать в условиях коронавируса"} text={"Сейчас бесконтактные бизнес-процедуры — оптимальный вариант ведения бизнеса."}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sort mt-5">
                    <nav aria-label="page-pagination">
                        <ul className="pagination">
                            <li className="page-item"><a className="page-link" href="#">❮</a></li>
                            <li className="page-item active"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item"><a className="page-link" href="#">...</a></li>
                            <li className="page-item"><a className="page-link" href="#">46</a></li>
                            <li className="page-item"><a className="page-link" href="#">❯</a></li>
                        </ul>
                    </nav>
                    <div className="me-2 me-sm-0">Показано 24<span className="d-none d-lg-inline"> статьи и новости</span></div>
                    <button className="btn_main btn_3">Смотреть еще 20</button>
                </div>
            </section>
        </div>

        <Partners />
    </main>
    );
}