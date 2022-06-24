import React from 'react';
import Breadcrumbs from '../nav/Breadcrumbs';

export default function AdvPage() {
    return (
        <main>
            <div className="container pt-4">
                <Breadcrumbs />
            </div>

            <section id="offer_page" className="container">
                <div className="row mb-4 mb-md-0" id="offer_page_header">
                    <div className="col-md-8">
                        <h1>English 1st - франшиза школы иностранных языков</h1>
                    </div>
                    <div className="col-md-4">
                        <div className="d-flex align-items-center justify-content-md-end">
                            <button className="add_to_fav">
                                <svg className="color-1" width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.7613 3.27059L18.1666 10.3344L18.3965 10.8114L18.9202 10.8893L26.5824 12.0291L21.0223 17.5776L20.6572 17.9419L20.7424 18.4506L22.0499 26.255L15.2352 22.5872L14.7613 22.3321L14.2874 22.5872L7.47265 26.255L8.78014 18.4506L8.86537 17.9419L8.50026 17.5776L2.9402 12.0291L10.6023 10.8893L11.1261 10.8114L11.356 10.3344L14.7613 3.27059Z"></path>
                                </svg>
                            </button>
                            <div className="color-1 f_15 fw_9 ms-4">1 000 000 Р</div>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-column flex-sm-row">
                    <span>ID: 55113344</span>
                    <time className="d-flex align-items-center ms-0 ms-sm-4">
                        <img src="images/icons/icon5.png" alt="дата" className="me-1" />
                        <span>12.10.2020</span>
                    </time>
                    <div className="d-flex align-items-center ms-0 ms-sm-4">
                        <img src="images/icons/icon6.png" alt="просмотры" className="me-1" />
                        <span>120 просмотров</span>
                    </div>
                </div>
                <hr />
                {/* 
                <div className="row justify-content-center text-md-center">
                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <span className="pt f_11">Прибыль в месяц:</span> <span className="f_13 color-1 fw_5 ms-2">100 000 Р</span>
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mt-3 mt-sm-0">
                        <span className="pt f_11">Инвестиции:</span> <span className="f_13 color-1 fw_5 ms-2">1 000 000 Р</span>
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mt-3 mt-lg-0">
                        <span className="pt f_11">Оборот в месяц:</span> <span className="f_13 color-1 fw_5 ms-2">50 000 Р</span>
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mt-3 mt-xl-0">
                        <span className="pt f_11">Окупаемость:</span> <span className="f_13 color-1 fw_5 ms-2">12 мес.</span>
                    </div>
                </div>
                <div className="position-relative my-5">
                    <div className="swiper_1">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <img src="images/offer_page.jpg" className="offer_page_img"/>
                            </div>
                            <div className="swiper-slide">
                                <img src="images/offer_page.jpg" className="offer_page_img"/>
                            </div>
                            <div className="swiper-slide">
                                <img src="images/offer_page.jpg" className="offer_page_img"/>
                            </div>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                    <div className="connection">
                        <div className="d-flex align-items-center mb-3">
                            <img src="images/photo.png" alt="Александр Васильев"/>
                            <div className="ms-2">
                                <p className="f_12 fw_5 mb-1">Александр Васильев</p>
                                <p className="pt f_09">Представитель франшизы</p>
                            </div>
                        </div>
                        <div className="mb-3">
                            <span>Телефон:</span>
                            <span className="color-1 td_und f_11">Показать телефон</span>
                        </div>
                        <button className="btn_main btn_4 w-100 mb-2">Заказать звонок</button>
                        <button className="btn_main btn_2 w-100">Получить бизнес - план</button>
                    </div>
                </div>

                <div className="row justify-content-center my-5">
                    <div className="col-sm-6 col-md-4 col-lg-3">
                        <div className="white_box box_shad h-100 d-flex align-items-center">
                            <span className="f_12 fw_5 color-1">2015</span>
                            <span className="pt f_09 lh_1 ms-2">Год основания бизнеса</span>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 mt-3 mt-sm-0">
                        <div className="white_box box_shad h-100 d-flex align-items-center">
                            <span className="f_12 fw_5 color-1">14</span>
                            <span className="pt f_09 lh_1 ms-2">Количество собственных точек</span>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 mt-3 mt-md-0">
                        <div className="white_box box_shad h-100 d-flex align-items-center">
                            <span className="f_12 fw_5 color-1">2018</span>
                            <span className="pt f_09 lh_1 ms-2">Год запуска франшизы</span>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 mt-3 mt-lg-0">
                        <div className="white_box box_shad h-100 d-flex align-items-center">
                            <span className="f_12 fw_5 color-1">20</span>
                            <span className="pt f_09 lh_1 ms-2">Количество проданных франшиз</span>
                        </div>
                    </div>
                </div>

                <div className="row mb-4 mb-md-5">
                    <div className="col-md-4 col-lg-3 position-relative">
                        <div className="left_menu">
                            <nav className="anchor_menu d-none d-md-block">
                                <ul>
                                    <li className="active"><a href="#anchor_1" className="scrollto">Описание компании</a></li>
                                    <li><a href="#anchor_2" className="scrollto">Описание франшизы</a></li>
                                    <li><a href="#anchor_3" className="scrollto">Преимущества франшизы</a></li>
                                    <li><a href="#anchor_4" className="scrollto">Этапы сотрудничества</a></li>
                                    <li><a href="#anchor_5" className="scrollto">Условия сотрудничества</a></li>
                                    <li><a href="#anchor_6" className="scrollto">Покупка франшизы</a></li>
                                    <li><a href="#anchor_7" className="scrollto">Фотогалерея</a></li>
                                    <li><a href="#anchor_8" className="scrollto">Похожие франшизы</a></li>
                                </ul>
                            </nav>
                            <img src="images/Group227.jpg" alt="" className="img-fluid mt-4"/>
                            <img src="images/Group227.jpg" alt="" className="img-fluid mt-4"/>
                        </div>
                    </div>
                    <div className="col-md-8 col-lg-9">
                        <div className="offer_page_main">
                            <hr className="mt-md-0"/>
                            <div className="d-flex align-items-baseline mb-5">
                                <img src="images/icons/pin.svg" alt="" style="width:1em;"/>
                                <span className="gray ms-2">Регионы продаж:</span>
                                <span className="ms-3">Казань</span>
                            </div>
                            <section className="anchor_block" id="anchor_1">
                                <h4 className="fw_7">Описание компании</h4>
                                <p>Школа английского языка предлагает курсы для детей и взрослых. Наши современные методики обучения и специально разработанные программы по обучению иностранным языкам помогают эффективно и в короткие сроки достичь отличных результатов.
                                    Мы предлагаем занятия для детей от 5 лет, а гибкий график занятий Вы сможете настроить индивидуально для вашего ребенка. В нашей школе дети могут изучать языки в течение всего учебного года, а также во время отдыха в нашем
                                    летнем языковом лагере.</p>
                            </section>

                            <section className="anchor_block" id="anchor_2">
                                <h4 className="fw_7">Описание франшизы</h4>
                                <p>Франшиза «English 1st» включает не только формат офлайн-обучения детей, но и онлайн. В пакет франшизы входят: онлайн-игры, мобильное приложение, онлайн-тесты для детей. С 2020 года франчайзер запустил новые образовательные
                                    онлайн-продукты. Они позволяют детям учиться по видеоурокам в записи или онлайн-урокам с педагогами в прямом эфире, не выходя из дома. Продукты включены в пакет франшизы детского языкового центра English 1st. Также набор
                                    программ дополнен новыми авторскими курсами по скорочтению и каллиграфии.</p>
                            </section>

                            <section className="anchor_block" id="anchor_3">
                                <h4 className="fw_7">Преимущества франшизы</h4>
                                <ul>
                                    <li>Уникальная авторская методика, гарантирующая быстрый результат;</li>
                                    <li>Небольшие стартовые инвестиции;</li>
                                    <li>Поддержка на всех этапах открытия и работы Центра;</li>
                                    <li>Более 130 успешно работающих филиалов по всему миру.</li>
                                </ul>
                                <h4 className="fw_7">Во франчайзинговый пакет входит:</h4>
                                <ul>
                                    <li>Бизнес-план</li>
                                    <li>Маркетинговый план</li>
                                    <li>Комплект методических пособий с поурочным планированием</li>
                                    <li>Сценарии праздников и мероприятий</li>
                                    <li>Комплект плакатов, игр, флэшкарт</li>
                                    <li>Типовой дизайн-проект с 3D-визуализацией</li>
                                    <li>Более 1000 дизайнерских макетов</li>
                                    <li>Документы, необходимые для получения лицензии</li>
                                    <li>Обучение франчайзи и кураторство на протяжении всего периода сотрудничества</li>
                                    <li>Подбор, собеседования и обучение всех преподавателей, мотивационная система для педагогов</li>
                                    <li>Сайт на общем домене</li>
                                    <li>CRM-система для ведения учета</li>
                                    <li>Поддержка специалистов франчайзера: юриста, бухгалтера, маркетолога, HR-специалиста, дизайнеров, иллюстраторов, программистов, копирайтеров – постоянная и ежедневная</li>
                                    <li>Помощь в получении субсидии на развитие бизнеса</li>
                                    <li>Регистрация договора коммерческой концессии в Роспатенте</li>
                                    <li>Регулярные консультации и семинары</li>
                                    <li>Участие в общих корпоративных мероприятиях, где партнеры сети общаются и обмениваются опытом, а также принимают участие в формировании стратегии развития сети.</li>
                                </ul>
                            </section>

                            <section className="anchor_block" id="anchor_4">
                                <h4 className="fw_7">Этапы сотрудничества</h4>
                                <ol>
                                    <li>Договор коммерческой концессии заключается на пять лет и проходит обязательную регистрацию в Роспатенте.</li>
                                    <li>Подробный бизнес план с детально описанными бизнес-процессами позволит как предпринимателям с опытом, так и начинающим бизнесменам разобраться в тонкостях образовательного бизнеса.</li>
                                    <li>Франчайзер помогает подготовить документы на получение субсидии по договору франчайзинга. У нас 100% успех в получении грантов и субсидий, мы имеем в этом большой опыт!</li>
                                    <li>В работе каждому партнеру помогают два куратора, которые готовы ответить на все вопросы.</li>
                                    <li>Регулярные семинары для руководителей, а также администраторов и педагогов центров проводятся не реже двух раз в месяц, в дальнейшем все записи вебинаров можно просмотреть в записи, чтобы освежить информацию.</li>
                                    <li>Полный комплект методических материалов с поурочным планированием, сценарии праздников и мероприятий центра.</li>
                                    <li>Юрист и бухгалтер компании помогут проверить и составить договора и разобраться с налогами.</li>
                                    <li>Маркетолог и специалист по PR составили подробный маркетинговый план и окажут поддержку по любым вопросам.</li>
                                    <li>У каждого партнера свой сайт на общем домене, где он может принимать заявки на обучение, публиковать новости, расписание, информацию о педагогах центра. Посещаемость сайта - более 5000 человек.</li>
                                    <li>CRM-система «Полиглотики-бизнес», позволяющая вести кадровый, финансовый учет, планировать загрузку помещений и вести базу клиентов.</li>
                                    <li>Наш партнер получает все шаблоны и программу для получения лицензии на образовательную деятельность.</li>
                                    <li>Франчайзер помогает с поиском и подбором персонала, проводит собеседование, тестирование и обязательное обучение педагогов центра (в любом количестве).</li>
                                    <li>Узнаваемый бренд, неповторимый стиль зафиксированы в бренд-буке.</li>
                                    <li>Франчайзер проводит регулярные встречи партнеров: ежеквартальные бизнес-завтраки и ежегодные слеты. Ежедневное общение партнеров сети происходит в онлайн-чате. "Полиглотики" разработали популярную игру для изучения новых
                                        слов – ее можно скачать бесплатно через сайт или Google Play.</li>
                                </ol>
                            </section>

                            <section className="anchor_block" id="anchor_5">
                                <h4 className="fw_7">Условия сотрудничества</h4>
                                <ul>
                                    <li>Первоначальный взнос: 350 000 ₽</li>
                                    <li>Инвестиции от: 1 600 000 ₽</li>
                                    <li>Инвестиции до: 1 900 000 ₽</li>
                                    <li>Срок окупаемости: 4-8 месяцев</li>
                                    <li>Регион продажи: Россия, Казахстан, Белоруссия, Другие страны</li>
                                </ul>
                            </section>

                            <section className="anchor_block" id="anchor_6">
                                <h4 className="fw_7">Покупка франшизы</h4>
                                <ul>
                                    <li>Оставьте заявку на сайте или позвоните представителю франшизы сами</li>
                                    <li>С вами связывается представитель франашизы для первичного знакомства</li>
                                    <li>Вам направляется подробный бизнес - план и материалы выбранной франшизы.</li>
                                    <li>Если франшиза вам подходит, выслаются договор покупки франшизы.</li>
                                    <li>Вы оплачиаете платёж и получаете доступ к франшизе.</li>
                                    <li>Вы начинаете вести свой бизнес!</li>
                                </ul>
                            </section>

                            <section className="anchor_block" id="anchor_7">
                                <h4 className="fw_7">Фотогалерея</h4>
                                <div className="row mb-5">
                                    <div className="col-6 col-sm-4 col-lg-3 mb-4">
                                        <a href="images/photogallery/1.jpg" data-fancybox="photogallery"><img src="images/photogallery/1.jpg" className="photogallery"/></a>
                                    </div>
                                    <div className="col-6 col-sm-4 col-lg-3 mb-4">
                                        <a href="images/photogallery/2.jpg" data-fancybox="photogallery"><img src="images/photogallery/2.jpg" className="photogallery"/></a>
                                    </div>
                                    <div className="col-6 col-sm-4 col-lg-3 mb-4">
                                        <a href="images/photogallery/3.jpg" data-fancybox="photogallery"><img src="images/photogallery/3.jpg" className="photogallery"/></a>
                                    </div>
                                    <div className="col-6 col-sm-4 col-lg-3 mb-4">
                                        <a href="images/photogallery/4.jpg" data-fancybox="photogallery"><img src="images/photogallery/4.jpg" className="photogallery"/></a>
                                    </div>
                                    <div className="col-6 col-sm-4 col-lg-3 mb-4">
                                        <a href="images/photogallery/5.jpg" data-fancybox="photogallery"><img src="images/photogallery/5.jpg" className="photogallery"/></a>
                                    </div>
                                    <div className="col-6 col-sm-4 col-lg-3 mb-4">
                                        <a href="images/photogallery/6.jpg" data-fancybox="photogallery"><img src="images/photogallery/6.jpg" className="photogallery"/></a>
                                    </div>
                                </div>
                            </section>

                            <h4 className="fw_7">Видео о франшизе</h4>
                            <video controls className="w-100 mb-5">
                                <source src="video/video.mp4" type="video/mp4" />
                            </video>

                            <hr />

                            <div className="d-flex align-items-center mb-4">
                                <h4 className="fw_7 mb-0">Связаться с представителем</h4>
                                <button className="btn_main btn_4 f_09 ms-4">Начать чат</button>
                            </div>

                            <form action="">
                                <div className="row">
                                    <div className="col-md-6">
                                        <input type="text" className="mb-4" placeholder="Ваше имя"/>
                                        <input type="text" className="mb-4" placeholder="Ваш номер телефона"/>
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" className="mb-4" placeholder="Город, в котором хотите открыть франшизу"/>
                                        <input type="text" className="mb-4" placeholder="Электронная почта"/>
                                    </div>
                                    <div className="col-12">
                                        <textarea rows="3" placeholder="Комментарий" className="mb-4"></textarea>
                                        <div className="checkbox mb-4">
                                            <input type="checkbox"/>
                                            <label for="">Согласен на обработку персональнх данных</label>
                                        </div>
                                        <button className="btn_main btn_2">Отправить</button>
                                    </div>
                                </div>
                            </form>

                            <div className="tags mt-5">
                                <span>Франшизы</span>
                                <span>Франшизы в сфере образования</span>
                                <span>Франшизы</span>
                                <span>Франшизы в сфере образования</span>
                                <span>Франшизы</span>
                                <span>Франшизы в сфере образования</span>
                                <span>Франшизы</span>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="anchor_block" id="anchor_8">
                    <h2 className="mt-4">Похожие франшизы</h2>
                    <div className="position-relative">
                        <div className="swiper_8">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="preview_small">
                                        <img src="images/offers/3.jpg"/>
                                        <div>
                                            <div className="layer_1">
                                                <p className="white">English 1st - франшиза школы иностранных языков</p>
                                            </div>
                                            <div className="layer_2">
                                                <div className="white">
                                                    <div className="f_08">Инвестиции от</div>
                                                    <div>400 000 руб</div>
                                                </div>
                                                <button className="add_to_fav me-2">
                                                    <svg viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M14.7613 3.27059L18.1666 10.3344L18.3965 10.8114L18.9202 10.8893L26.5824 12.0291L21.0223 17.5776L20.6572 17.9419L20.7424 18.4506L22.0499 26.255L15.2352 22.5872L14.7613 22.3321L14.2874 22.5872L7.47265 26.255L8.78014 18.4506L8.86537 17.9419L8.50026 17.5776L2.9402 12.0291L10.6023 10.8893L11.1261 10.8114L11.356 10.3344L14.7613 3.27059Z"/>
                                                    </svg>
                                                </button>
                                                <button className="btn_main btn_2 btn_img"><img src="images/icons/write.png" alt="" /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="preview_small">
                                        <img src="images/offers/3.jpg"/>
                                        <div>
                                            <div className="layer_1">
                                                <p className="white">English 1st - франшиза школы иностранных языков</p>
                                            </div>
                                            <div className="layer_2">
                                                <div className="white">
                                                    <div className="f_08">Инвестиции от</div>
                                                    <div>400 000 руб</div>
                                                </div>
                                                <button className="add_to_fav me-2">
                                                    <svg viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M14.7613 3.27059L18.1666 10.3344L18.3965 10.8114L18.9202 10.8893L26.5824 12.0291L21.0223 17.5776L20.6572 17.9419L20.7424 18.4506L22.0499 26.255L15.2352 22.5872L14.7613 22.3321L14.2874 22.5872L7.47265 26.255L8.78014 18.4506L8.86537 17.9419L8.50026 17.5776L2.9402 12.0291L10.6023 10.8893L11.1261 10.8114L11.356 10.3344L14.7613 3.27059Z"/>
                                                    </svg>
                                                </button>
                                                <button className="btn_main btn_2 btn_img"><img src="images/icons/write.png" alt=""/></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="preview_small">
                                        <img src="images/offers/3.jpg"/>
                                        <div>
                                            <div className="layer_1">
                                                <p className="white">English 1st - франшиза школы иностранных языков</p>
                                            </div>
                                            <div className="layer_2">
                                                <div className="white">
                                                    <div className="f_08">Инвестиции от</div>
                                                    <div>400 000 руб</div>
                                                </div>
                                                <button className="add_to_fav me-2">
                                                    <svg viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M14.7613 3.27059L18.1666 10.3344L18.3965 10.8114L18.9202 10.8893L26.5824 12.0291L21.0223 17.5776L20.6572 17.9419L20.7424 18.4506L22.0499 26.255L15.2352 22.5872L14.7613 22.3321L14.2874 22.5872L7.47265 26.255L8.78014 18.4506L8.86537 17.9419L8.50026 17.5776L2.9402 12.0291L10.6023 10.8893L11.1261 10.8114L11.356 10.3344L14.7613 3.27059Z"/>
                                                    </svg>
                                                </button>
                                                <button className="btn_main btn_2 btn_img"><img src="images/icons/write.png" alt="" /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="preview_small">
                                        <img src="images/offers/3.jpg"/>
                                        <div>
                                            <div className="layer_1">
                                                <p className="white">English 1st - франшиза школы иностранных языков</p>
                                            </div>
                                            <div className="layer_2">
                                                <div className="white">
                                                    <div className="f_08">Инвестиции от</div>
                                                    <div>400 000 руб</div>
                                                </div>
                                                <button className="add_to_fav me-2">
                                                    <svg viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M14.7613 3.27059L18.1666 10.3344L18.3965 10.8114L18.9202 10.8893L26.5824 12.0291L21.0223 17.5776L20.6572 17.9419L20.7424 18.4506L22.0499 26.255L15.2352 22.5872L14.7613 22.3321L14.2874 22.5872L7.47265 26.255L8.78014 18.4506L8.86537 17.9419L8.50026 17.5776L2.9402 12.0291L10.6023 10.8893L11.1261 10.8114L11.356 10.3344L14.7613 3.27059Z"/>
                                                    </svg>
                                                </button>
                                                <button className="btn_main btn_2 btn_img"><img src="images/icons/write.png" alt="" /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="preview_small">
                                        <img src="images/offers/3.jpg"/>
                                        <div>
                                            <div className="layer_1">
                                                <p className="white">English 1st - франшиза школы иностранных языков</p>
                                            </div>
                                            <div className="layer_2">
                                                <div className="white">
                                                    <div className="f_08">Инвестиции от</div>
                                                    <div>400 000 руб</div>
                                                </div>
                                                <button className="add_to_fav me-2">
                                                    <svg viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M14.7613 3.27059L18.1666 10.3344L18.3965 10.8114L18.9202 10.8893L26.5824 12.0291L21.0223 17.5776L20.6572 17.9419L20.7424 18.4506L22.0499 26.255L15.2352 22.5872L14.7613 22.3321L14.2874 22.5872L7.47265 26.255L8.78014 18.4506L8.86537 17.9419L8.50026 17.5776L2.9402 12.0291L10.6023 10.8893L11.1261 10.8114L11.356 10.3344L14.7613 3.27059Z"/>
                                                    </svg>
                                                </button>
                                                <button className="btn_main btn_2 btn_img"><img src="images/icons/write.png" alt=""/></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="preview_small">
                                        <img src="images/offers/3.jpg"/>
                                        <div>
                                            <div className="layer_1">
                                                <p className="white">English 1st - франшиза школы иностранных языков</p>
                                            </div>
                                            <div className="layer_2">
                                                <div className="white">
                                                    <div className="f_08">Инвестиции от</div>
                                                    <div>400 000 руб</div>
                                                </div>
                                                <button className="add_to_fav me-2">
                                                    <svg viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M14.7613 3.27059L18.1666 10.3344L18.3965 10.8114L18.9202 10.8893L26.5824 12.0291L21.0223 17.5776L20.6572 17.9419L20.7424 18.4506L22.0499 26.255L15.2352 22.5872L14.7613 22.3321L14.2874 22.5872L7.47265 26.255L8.78014 18.4506L8.86537 17.9419L8.50026 17.5776L2.9402 12.0291L10.6023 10.8893L11.1261 10.8114L11.356 10.3344L14.7613 3.27059Z"/>
                                                    </svg>
                                                </button>
                                                <button className="btn_main btn_2 btn_img"><img src="images/icons/write.png" alt=""/></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="preview_small">
                                        <img src="images/offers/3.jpg"/>
                                        <div>
                                            <div className="layer_1">
                                                <p className="white">English 1st - франшиза школы иностранных языков</p>
                                            </div>
                                            <div className="layer_2">
                                                <div className="white">
                                                    <div className="f_08">Инвестиции от</div>
                                                    <div>400 000 руб</div>
                                                </div>
                                                <button className="add_to_fav me-2">
                                                    <svg viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M14.7613 3.27059L18.1666 10.3344L18.3965 10.8114L18.9202 10.8893L26.5824 12.0291L21.0223 17.5776L20.6572 17.9419L20.7424 18.4506L22.0499 26.255L15.2352 22.5872L14.7613 22.3321L14.2874 22.5872L7.47265 26.255L8.78014 18.4506L8.86537 17.9419L8.50026 17.5776L2.9402 12.0291L10.6023 10.8893L11.1261 10.8114L11.356 10.3344L14.7613 3.27059Z"/>
                                                    </svg>
                                                </button>
                                                <button className="btn_main btn_2 btn_img"><img src="images/icons/write.png" alt=""/></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="preview_small">
                                        <img src="images/offers/3.jpg"/>
                                        <div>
                                            <div className="layer_1">
                                                <p className="white">English 1st - франшиза школы иностранных языков</p>
                                            </div>
                                            <div className="layer_2">
                                                <div className="white">
                                                    <div className="f_08">Инвестиции от</div>
                                                    <div>400 000 руб</div>
                                                </div>
                                                <button className="add_to_fav me-2">
                                                    <svg viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M14.7613 3.27059L18.1666 10.3344L18.3965 10.8114L18.9202 10.8893L26.5824 12.0291L21.0223 17.5776L20.6572 17.9419L20.7424 18.4506L22.0499 26.255L15.2352 22.5872L14.7613 22.3321L14.2874 22.5872L7.47265 26.255L8.78014 18.4506L8.86537 17.9419L8.50026 17.5776L2.9402 12.0291L10.6023 10.8893L11.1261 10.8114L11.356 10.3344L14.7613 3.27059Z"/>
                                                    </svg>
                                                </button>
                                                <button className="btn_main btn_2 btn_img"><img src="images/icons/write.png" alt=""/></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="preview_small">
                                        <img src="images/offers/3.jpg"/>
                                        <div>
                                            <div className="layer_1">
                                                <p className="white">English 1st - франшиза школы иностранных языков</p>
                                            </div>
                                            <div className="layer_2">
                                                <div className="white">
                                                    <div className="f_08">Инвестиции от</div>
                                                    <div>400 000 руб</div>
                                                </div>
                                                <button className="add_to_fav me-2">
                                                    <svg viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M14.7613 3.27059L18.1666 10.3344L18.3965 10.8114L18.9202 10.8893L26.5824 12.0291L21.0223 17.5776L20.6572 17.9419L20.7424 18.4506L22.0499 26.255L15.2352 22.5872L14.7613 22.3321L14.2874 22.5872L7.47265 26.255L8.78014 18.4506L8.86537 17.9419L8.50026 17.5776L2.9402 12.0291L10.6023 10.8893L11.1261 10.8114L11.356 10.3344L14.7613 3.27059Z"/>
                                                    </svg>
                                                </button>
                                                <button className="btn_main btn_2 btn_img"><img src="images/icons/write.png" alt=""/></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-button-prev">❮</div>
                            <div className="swiper-button-next">❯</div>
                        </div>
                    </div>
                </section>

                <div className="op_header_sticky d-none">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-lg-3">
                                <p className="text-center text-md-left fw_7 lh_15 mb-1 mb-md-0">English 1st - франшиза школы иностранных языков</p>
                            </div>
                            <div className="col-md-8 col-lg-9 d-flex justify-content-around flex-wrap">
                                <div className="f_09">
                                    <div className="mb-md-2">
                                        <span className="gray pt">Прибыль:</span>
                                        <span className="fw_5">100 000 Р/месяц</span>
                                    </div>
                                    <div>
                                        <span className="gray pt">Инвестиции:</span>
                                        <span className="fw_5">1 000 000 Р</span>
                                    </div>
                                </div>
                                <div className="d-none d-sm-block pt f_09">
                                    <div className="mb-md-2">Представитель франшизы</div>
                                    <div className="color-1 td_und">Показать телефон</div>
                                </div>
                                <button className="add_to_fav">
                                    <svg className="color-1" width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.7613 3.27059L18.1666 10.3344L18.3965 10.8114L18.9202 10.8893L26.5824 12.0291L21.0223 17.5776L20.6572 17.9419L20.7424 18.4506L22.0499 26.255L15.2352 22.5872L14.7613 22.3321L14.2874 22.5872L7.47265 26.255L8.78014 18.4506L8.86537 17.9419L8.50026 17.5776L2.9402 12.0291L10.6023 10.8893L11.1261 10.8114L11.356 10.3344L14.7613 3.27059Z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="nav_anchors">
                        <div className="container position-relative">
                            <div className="swiper_menu">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <a href="#anchor_1" className="scrollto">Описание компании</a>
                                    </div>
                                    <div className="swiper-slide"><a href="#anchor_2" className="scrollto">Описание франшизы</a></div>
                                    <div className="swiper-slide"><a href="#anchor_3" className="scrollto">Преимущества франшизы</a></div>
                                    <div className="swiper-slide"><a href="#anchor_4" className="scrollto">Этапы сотрудничества</a></div>
                                    <div className="swiper-slide"><a href="#anchor_5" className="scrollto">Условия сотрудничества</a></div>
                                    <div className="swiper-slide"><a href="#anchor_6" className="scrollto">Покупка франшизы</a></div>
                                    <div className="swiper-slide"><a href="#anchor_7" className="scrollto">Фотогалерея</a></div>
                                    <div className="swiper-slide"><a href="#anchor_8" className="scrollto">Похожие франшизы</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </section>
        </main>
    );
}