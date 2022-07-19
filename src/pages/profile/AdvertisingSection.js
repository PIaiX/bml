import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineArrowBack } from "react-icons/md";

export default function AdvertisingSection() {
    return (
        <>
            <Link to="/account" className='color-1 f_11 fw_5 d-flex align-items-center d-lg-none mb-3 mb-sm-4'><MdOutlineArrowBack /> <span className='ms-2'>Назад</span></Link>
            <div>
                <h4 className='mb-3 mb-sm-4 mb-md-5'>Разместить баннер</h4>
                <h6 className='f_11 fw_5 mb-3'>Описание размещения баннеров и объявлений</h6>
                <p>Задачей размещения баннеров и объявлений является привлечение пользователей, которые уже были на вашем сайте. Часто вы можете встретить рекламу с фотографиями товара, который ранее видели. Но для получения конверсий, используйте баннеры, которые раскрывают главные возможности продукта. Либо напомните пользователю о том, что он забыл оформить заявку или подписаться на вас.</p>
                <hr/>
                <div className='row'>
                    <div className='col-sm-6 col-md-4 mb-3 mb-sm-0'>
                        <h6 className='f_11 fw_5 mb-3'>Приоритетное размещение – Баннер на главной странице (1920х440)</h6>
                        <p>По вопросам размещения обращаться на почту</p>
                    </div>
                    <div className='col-sm-6 col-md-8'>
                        <img src="/images/banner-1.jpg" alt="Приоритетное размещение" className='img-fluid d-block mx-auto'/>
                    </div>
                </div>
                <hr/>
                <div className='row'>
                    <div className='col-sm-6 col-md-4 mb-3 mb-sm-0'>
                        <label className=' mb-3'>
                            <input type="radio" name='adv' className='f_11'/>
                            <h6 className='f_11 fw_5 ms-2 ms-xl-3 flex-1'>Рекламный баннер (1200х800)</h6>
                        </label>
                        <div className='mb-3 mb-md-4'>Статус: <span className='l-gray'>свободен</span></div>
                        <div className='fw_5'>Стоимость размещения: </div>
                        <div>3 месяца – 6000 ₽</div>
                        <div>6 месяцев – 8000 ₽</div>
                        <div className='fw_5 mt-3 mt-sm-4 mt-md-5'>Изображение</div>
                        <div className='f_09 l-gray mt-1'>Размер баннера 1200*800</div>
                        <div className="file-upload mt-2">
                            <button className="btn_main btn_2 fw_4">Загрузить</button>
                            <input type="file" />
                        </div>
                    </div>
                    <div className='col-sm-6 col-md-8'>
                        <img src="/images/banner-2.jpg" alt="Рекламный баннер  (1200х800)" className='img-fluid d-block mx-auto'/>
                    </div>
                </div>
                <hr/>
                <div className='row'>
                    <div className='col-sm-6 col-md-4 mb-3 mb-sm-0'>
                        <label className=' mb-3'>
                            <input type="radio" name='adv' className='f_11'/>
                            <h6 className='f_11 fw_5 ms-2 ms-xl-3 flex-1'>Рекламный баннер (250х160)</h6>
                        </label>
                        <div className='mb-3 mb-md-4'>Статус: <span className='l-gray'>свободен</span></div>
                        <div className='fw_5'>Стоимость размещения: </div>
                        <div>3 месяца – 6000 ₽</div>
                        <div>6 месяцев – 8000 ₽</div>
                        <div className='fw_5 mt-3 mt-sm-4 mt-md-5'>Изображение</div>
                        <div className='f_09 l-gray mt-1'>Размер баннера 250х160</div>
                        <div className="file-upload mt-2">
                            <button className="btn_main btn_2 fw_4">Загрузить</button>
                            <input type="file" />
                        </div>
                    </div>
                    <div className='col-sm-6 col-md-8'>
                        <img src="/images/banner-3.jpg" alt="Рекламный баннер  (250х160)" className='img-fluid d-block mx-auto'/>
                    </div>
                </div>
                <div className='row align-items-center mt-4 mt-md-5 g-sm-4'>
                    <div className='col-sm-4 col-xxl-3 mb-2 mb-sm-0'>
                        <div>Срок размещения</div>
                    </div>
                    <div className='col-sm-8 col-xxl-9 mb-3 mb-sm-0'>
                        <select defaultValue={0}>
                            <option value={0}>3 месяца</option>
                            <option value={1}>6 месяцев</option>
                        </select>
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