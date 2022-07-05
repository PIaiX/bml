import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineArrowBack } from "react-icons/md";
import AdCard from './AdCard';

export default function UserAds() {
    const [section, setSection] = useState('0');
    const [tab, setTab] = useState('0');

    return (
        <>
            <Link to="/account" className='color-1 f_11 fw_5 d-flex align-items-center d-lg-none mb-3 mb-sm-4'><MdOutlineArrowBack /> <span className='ms-2'>Назад</span></Link>
            <div className="acc-box">
                <div className="d-flex flex-column-reverse flex-sm-row justify-content-between align-items-center mb-3 mb-md-4">
                    <div className='d-flex align-items-center f_11 mt-3 mt-sm-0'>
                        <button type='button' className={(section === '0') ? '' : 'l-gray'} onClick={() => setSection('0')}>
                            <span>Объявления</span>
                            <span className="l-gray ms-2">5</span>
                        </button>
                        <button type='button' className={(section === '1') ? 'ms-4' : 'l-gray ms-4'} onClick={() => setSection('1')}>
                            <span>Архив</span>
                            <span className="l-gray ms-2">5</span>
                        </button>
                    </div>
                    <Link to="new-ad" className="btn_main btn_3">Новое объявление</Link>
                </div>
                <div className='tab-btns'>
                    <button type='button' className={(tab === '0') ? 'active' : ''} onClick={() => setTab('0')}>Поиск инвесторов</button>
                    <button type='button' className={(tab === '1') ? 'active' : ''} onClick={() => setTab('1')}>Предложения инвесторов</button>
                    <button type='button' className={(tab === '2') ? 'active' : ''} onClick={() => setTab('2')}>Поиск бизнес партнёров</button>
                    <button type='button' className={(tab === '3') ? 'active' : ''} onClick={() => setTab('3')}>Продажа готового бизнеса</button>
                    <button type='button' className={(tab === '4') ? 'active' : ''} onClick={() => setTab('4')}>Франшизы</button>
                </div>
                <div className='acc-box'>
                    <AdCard type={tab} section={section} imgURL={"/bml/images/photo-replacer.jpg"} title={'Название объявления'} scope={'Образование'} investments={'20000'} validity={'29.08.22'}/>
                    <AdCard type={tab} section={section} imgURL={"/bml/images/photo-replacer.jpg"} title={'Название объявления'} scope={'Образование'} investments={'20000'} validity={'29.08.22'}/>
                    <AdCard type={tab} section={section} imgURL={"/bml/images/photo-replacer.jpg"} title={'Название объявления'} scope={'Образование'} investments={'20000'} validity={'29.08.22'}/>
                    <AdCard type={tab} section={section} imgURL={"/bml/images/photo-replacer.jpg"} title={'Название объявления'} scope={'Образование'} investments={'20000'} validity={'29.08.22'}/>
                    <AdCard type={tab} section={section} imgURL={"/bml/images/photo-replacer.jpg"} title={'Название объявления'} scope={'Образование'} investments={'20000'} validity={'29.08.22'}/>
                </div>
                <div className='acc-box p-0 mt-3'>
                    <nav aria-label="page-pagination" className='w-100'>
                        <ul className="pagination justify-content-center">
                            <li className="page-item"><a className="page-link" href="/">❮</a></li>
                            <li className="page-item"><a className="page-link" href="/">1</a></li>
                            <li className="page-item"><a className="page-link" href="/">2</a></li>
                            <li className="page-item"><a className="page-link" href="/">3</a></li>
                            <li className="page-item"><a className="page-link" href="/">...</a></li>
                            <li className="page-item"><a className="page-link" href="/">46</a></li>
                            <li className="page-item"><a className="page-link" href="/">❯</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
}