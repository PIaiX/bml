import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineArrowBack } from "react-icons/md";
import AdvPrice from './AdvPrice';

export default function Premium(props) {
    return (
        <>
            <Link to="/account" className='color-1 f_11 fw_5 d-flex align-items-center d-lg-none mb-3 mb-sm-4'><MdOutlineArrowBack /> <span className='ms-2'>Назад</span></Link>
            <div>
                <h4>Премиальное размещение</h4>
                <h6 className='f_11 mb-3'>Описание размещения баннеров и объявлений</h6>
                <p>Задачей размещения баннеров и объявлений является привлечение пользователей, которые уже были на вашем сайте. Часто вы можете встретить рекламу с фотографиями товара, который ранее видели. Но для получения конверсий, используйте баннеры, которые раскрывают главные возможности продукта. Либо напомните пользователю о том, что он забыл оформить заявку или подписаться на вас.</p>
                <div className='row g-2 g-sm-3 mb-4 mb-sm-5'>
                    <div className='col-6 col-md-4 col-xxl-3'>
                        <AdvPrice title={"Название места"} price3={'5000'} price6={'7000'}/>
                    </div>
                    <div className='col-6 col-md-4 col-xxl-3'>
                        <AdvPrice title={"Название места"} price3={'5000'} price6={'7000'} blocked={true}/>
                    </div>
                    <div className='col-6 col-md-4 col-xxl-3'>
                        <AdvPrice title={"Название места"} price3={'5000'} price6={'7000'} busy={true} date={'21.10.22'}/>
                    </div>
                    <div className='col-6 col-md-4 col-xxl-3'>
                        <AdvPrice title={"Название места"} price3={'5000'} price6={'7000'}/>
                    </div>
                    <div className='col-6 col-md-4 col-xxl-3'>
                        <AdvPrice title={"Название места"} price3={'5000'} price6={'7000'} blocked={true}/>
                    </div>
                    <div className='col-6 col-md-4 col-xxl-3'>
                        <AdvPrice title={"Название места"} price3={'5000'} price6={'7000'} busy={true} date={'21.10.22'}/>
                    </div>
                    <div className='col-6 col-md-4 col-xxl-3'>
                        <AdvPrice title={"Название места"} price3={'5000'} price6={'7000'}/>
                    </div>
                    <div className='col-6 col-md-4 col-xxl-3'>
                        <AdvPrice title={"Название места"} price3={'5000'} price6={'7000'} blocked={true}/>
                    </div>
                    <div className='col-6 col-md-4 col-xxl-3'>
                        <AdvPrice title={"Название места"} price3={'5000'} price6={'7000'} busy={true} date={'21.10.22'}/>
                    </div>
                    <div className='col-6 col-md-4 col-xxl-3'>
                        <AdvPrice title={"Название места"} price3={'5000'} price6={'7000'}/>
                    </div>
                    <div className='col-6 col-md-4 col-xxl-3'>
                        <AdvPrice title={"Название места"} price3={'5000'} price6={'7000'} blocked={true}/>
                    </div>
                    <div className='col-6 col-md-4 col-xxl-3'>
                        <AdvPrice title={"Название места"} price3={'5000'} price6={'7000'} busy={true} date={'21.10.22'}/>
                    </div>
                    <div className='col-12'>
                        <AdvPrice title={"Название места"} price3={'5000'} price6={'7000'}/>
                    </div>
                    <div className='col-6 col-md-4 col-xxl-3'>
                        <AdvPrice title={"Название места"} price3={'5000'} price6={'7000'}/>
                    </div>
                    <div className='col-6 col-md-4 col-xxl-3'>
                        <AdvPrice title={"Название места"} price3={'5000'} price6={'7000'} blocked={true}/>
                    </div>
                    <div className='col-6 col-md-4 col-xxl-3'>
                        <AdvPrice title={"Название места"} price3={'5000'} price6={'7000'} busy={true} date={'21.10.22'}/>
                    </div>
                    <div className='col-6 col-md-4 col-xxl-3'>
                        <AdvPrice title={"Название места"} price3={'5000'} price6={'7000'}/>
                    </div>
                    <div className='col-6 col-md-4 col-xxl-3'>
                        <AdvPrice title={"Название места"} price3={'5000'} price6={'7000'} blocked={true}/>
                    </div>
                    <div className='col-6 col-md-4 col-xxl-3'>
                        <AdvPrice title={"Название места"} price3={'5000'} price6={'7000'} busy={true} date={'21.10.22'}/>
                    </div>
                    <div className='col-6 col-md-4 col-xxl-3'>
                        <AdvPrice title={"Название места"} price3={'5000'} price6={'7000'}/>
                    </div>
                    <div className='col-6 col-md-4 col-xxl-3'>
                        <AdvPrice title={"Название места"} price3={'5000'} price6={'7000'} blocked={true}/>
                    </div>
                    <div className='col-6 col-md-4 col-xxl-3'>
                        <AdvPrice title={"Название места"} price3={'5000'} price6={'7000'} busy={true} date={'21.10.22'}/>
                    </div>
                    <div className='col-6 col-md-4 col-xxl-3'>
                        <AdvPrice title={"Название места"} price3={'5000'} price6={'7000'}/>
                    </div>
                    <div className='col-6 col-md-4 col-xxl-3'>
                        <AdvPrice title={"Название места"} price3={'5000'} price6={'7000'} blocked={true}/>
                    </div>
                    <div className='col-6 col-md-4 col-xxl-3'>
                        <AdvPrice title={"Название места"} price3={'5000'} price6={'7000'} busy={true} date={'21.10.22'}/>
                    </div>
                    <div className='col-12'>
                        <AdvPrice title={"Название места"} price3={'5000'} price6={'7000'}/>
                    </div>
                    <div className='col-6 col-md-4 col-xxl-3'>
                        <AdvPrice title={"Название места"} price3={'5000'} price6={'7000'}/>
                    </div>
                    <div className='col-6 col-md-4 col-xxl-3'>
                        <AdvPrice title={"Название места"} price3={'5000'} price6={'7000'} blocked={true}/>
                    </div>
                    <div className='col-6 col-md-4 col-xxl-3'>
                        <AdvPrice title={"Название места"} price3={'5000'} price6={'7000'} busy={true} date={'21.10.22'}/>
                    </div>
                    <div className='col-6 col-md-4 col-xxl-3'>
                        <AdvPrice title={"Название места"} price3={'5000'} price6={'7000'}/>
                    </div>
                    <div className='col-6 col-md-4 col-xxl-3'>
                        <AdvPrice title={"Название места"} price3={'5000'} price6={'7000'} blocked={true}/>
                    </div>
                    <div className='col-6 col-md-4 col-xxl-3'>
                        <AdvPrice title={"Название места"} price3={'5000'} price6={'7000'} busy={true} date={'21.10.22'}/>
                    </div>
                    <div className='col-6 col-md-4 col-xxl-3'>
                        <AdvPrice title={"Название места"} price3={'5000'} price6={'7000'}/>
                    </div>
                    <div className='col-6 col-md-4 col-xxl-3'>
                        <AdvPrice title={"Название места"} price3={'5000'} price6={'7000'} blocked={true}/>
                    </div>
                    <div className='col-6 col-md-4 col-xxl-3'>
                        <AdvPrice title={"Название места"} price3={'5000'} price6={'7000'} busy={true} date={'21.10.22'}/>
                    </div>
                    <div className='col-6 col-md-4 col-xxl-3'>
                        <AdvPrice title={"Название места"} price3={'5000'} price6={'7000'}/>
                    </div>
                    <div className='col-6 col-md-4 col-xxl-3'>
                        <AdvPrice title={"Название места"} price3={'5000'} price6={'7000'} blocked={true}/>
                    </div>
                    <div className='col-6 col-md-4 col-xxl-3'>
                        <AdvPrice title={"Название места"} price3={'5000'} price6={'7000'} busy={true} date={'21.10.22'}/>
                    </div>
                </div>
                <div className='row align-items-center g-sm-4'>
                    <div className='col-sm-4 col-xxl-3 mb-2 mb-sm-0'>
                        <div>Изображение</div>
                        <div className='f_09 l-gray mt-1'>Размер баннера 1200*280</div>
                    </div>
                    <div className='col-sm-8 col-xxl-9 mb-3 mb-sm-0'>
                        <div className="file-upload">
                            <button type='button' className="btn_main btn_2 fw_4">Загрузить</button>
                            <input type="file" />
                        </div>
                    </div>
                    <div className='col-sm-4 col-xxl-3 mb-2 mb-sm-0'>
                        <div>Изображение</div>
                        <div className='f_09 l-gray mt-1'>Размер баннера 250*160</div>
                    </div>
                    <div className='col-sm-8 col-xxl-9 mb-3 mb-sm-0'>
                        <div className="file-upload">
                            <button type='button' className="btn_main btn_2 fw_4">Загрузить</button>
                            <input type="file" />
                        </div>
                    </div>
                    <div className='col-sm-4 col-xxl-3 mb-2 mb-sm-0'>
                        <div>Срок размещения</div>
                    </div>
                    <div className='col-sm-8 col-xxl-9 mb-3 mb-sm-0'>
                        <select defaultValue={0}>
                            <option value={0}>3 месяца – 5 000 ₽</option>
                            <option value={1}>6 месяцев – 7 000 ₽</option>
                        </select>
                    </div>
                    <div className='col-sm-4 col-xxl-3 mb-2 mb-sm-0'>
                        <div>Премиальное размещение</div>
                    </div>
                    <div className='col-sm-8 col-xxl-9 mb-3 mb-sm-0'>
                        <input type='text' defaultValue={'Премиальное место №5 – 10 000 ₽ '} />
                    </div>
                    <div className='col-sm-4 col-xxl-3 mb-2 mb-sm-0'>
                        <div className='f_12 fw_6'>Сумма к оплате</div>
                    </div>
                    <div className='col-sm-8 col-md-4 col-xxl-3 mb-3 mb-sm-0'>
                        <input type='text' defaultValue={'16 000'} className="input-price f_12 fw_6"/>
                    </div>
                </div>
                <button type='button' className="btn_main btn_4 fw_4 mt-sm-5">Создать и перейти к оплате</button>
            </div>
        </>
    );
}