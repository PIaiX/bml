import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineArrowBack } from "react-icons/md";
import PartnerCard from './PartnerCard';

export default function Partners() {
    return (
        <>
            <Link to="/account/profile" className='color-1 f_11 fw_5 d-flex align-items-center d-lg-none mb-3 mb-sm-4'><MdOutlineArrowBack /> <span className='ms-2'>Назад</span></Link>
            <div class="acc-box">
                <div className="d-flex flex-column-reverse flex-md-row justify-content-between align-items-center mb-3 mb-md-4">
                    <div className='d-flex align-items-center f_11 mt-3 mt-sm-0'>
                        <button type='button'>
                            <span>Бизнес партнёры</span>
                            <span className="l-gray ms-2">5</span>
                        </button>
                        <button type='button' className='l-gray ms-4'>
                            <span>Заявки</span>
                            <span className="requests-count ms-2">5</span>
                        </button>
                    </div>
                    <form action="" class="form_search mb-3 mb-md-0">
                        <input type="search" placeholder="Поиск"/>
                        <button type="button" class="blue px-2">Отменить</button>
                    </form>
                </div>
                <div class="mt-4 mt-xl-5">
                    <PartnerCard imgURL={'/bml/images/photo.png'} name={'Саша Петров'} agency={'Компания/деятельность'} />
                    <PartnerCard imgURL={'/bml/images/photo.png'} name={'Саша Петров'} agency={'Компания/деятельность'} />
                    <PartnerCard imgURL={'/bml/images/photo.png'} name={'Саша Петров'} agency={'Компания/деятельность'} />
                    <PartnerCard imgURL={'/bml/images/photo.png'} name={'Саша Петров'} agency={'Компания/деятельность'} />
                    <PartnerCard imgURL={'/bml/images/photo.png'} name={'Саша Петров'} agency={'Компания/деятельность'} />
                </div>
            </div>
        </>
    );
}