import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../nav/Breadcrumbs';
import { MdDateRange, MdOutlineVisibility, MdArrowBack } from "react-icons/md";

export default function News() {
    return (
        <main>
            <div className="container py-3 py-sm-4">
                <Breadcrumbs />

                <article className="full">
                    <h1 className="h3 fw_5 rob my-3 my-sm-4 my-sm-5">Как малому бизнесу выжить в условиях коронавируса</h1>
                    <div className="short-info justify-content-start">
                        <time className="d-flex align-items-center">
                            <MdDateRange />
                            <span className='ms-1 ms-sm-2'>12.10.2020</span>
                        </time>
                        <div className="d-flex align-items-center ms-3 ms-sm-4">
                            <MdOutlineVisibility />
                            <span className='ms-1 ms-sm-2'>120 просмотров</span>
                        </div>
                    </div>
                    <hr />
                    <div className="text">
                        <img className="new-page-img" src="/images/news/n1.jpg" alt="Как малому бизнесу выживать в условиях коронавируса" />
                        <p>Сейчас бесконтактные бизнес-процедуры — оптимальный вариант ведения бизнеса. В минувший четверг, 12 марта, на фоне пандемии коронавируса произошло эпичное падение индекса Dow Jones и обрушение мировых рынков, от которого инвестиционный мир будет оправляться еще долго. Такого мощного потрясения биржи не знали со времен «черного понедельника» 1987 года.</p>
                        <p>Вирус COVID-2019 поразил «иммунную систему» мировой экономики и в течение 24 часов сократил совокупное состояние 20 богатейших людей мира на $78 млрд. К примеру, капитализация компаний Марка Цукерберга потеряла $5,7 млрд. Еще сильнее пострадали авиаперевозчики, туристические компании, европейские и азиатские ретейлеры.</p>
                        <p>Как в этой сложной ситуации не только сохранить деньги и удержать на плаву свой бизнес, но и развивать его в кризис? Одна из лучших рекомендаций — переводить все процессы в онлайн.</p>
                    </div>
                    <Link className="return" to="/news">
                        <MdArrowBack />
                        <span>Вернуться к остальным новотям</span>
                    </Link>
                </article>
            </div>
        </main>
    );
}