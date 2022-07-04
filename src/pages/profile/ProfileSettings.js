import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineArrowBack } from "react-icons/md";

export default function ProfileSettings() {
    return (
        <div>
            <Link to="/account" className='color-1 f_11 fw_5 d-flex align-items-center d-lg-none mb-3 mb-sm-4'><MdOutlineArrowBack /> <span className='ms-2'>Назад</span></Link>

            <div className='bg_light p-3 text-center mb-4'>Размещение объявлений и полный доступ будет предоставлен после заполнения всх обязательных полей</div>
            <h6 className='f_11 mb-3'>Фото:</h6>
            <div className='acc-box'>
                <div className="row align-items-center">
                    <div className="col-md-4 mb-4 mb-md-0">
                        <img src="/bml/images/photo-replacer.jpg" alt="Анна Петрова" className="user-photo"/>
                    </div>
                    <div className="col-md-8">
                        <div className="file-upload mb-3">
                            <button className="btn_main btn_2 fw_4">Загрузить</button>
                            <input type="file" />
                        </div>
                        <div className="f_08 gray">(К загрузке разрешены файлы формата PNG, JPG, JPEG и весом не более 1 МБ.<br />Рекомендуем загружать фото не менее 300px в ширину и высоту.)</div>
                    </div>
                </div>
            </div>

            <h6 className="f_11 mb-2 mt-4 mb-sm-3 mt-sm-5">Личные данные профиля</h6>
            <form className='acc-box'>
                <div className='row  align-items-center g-3'>
                    <div className='col-sm-4'>
                        <h6>Фамилия<span className='red'>*</span></h6>
                    </div>
                    <div className='col-sm-8'>
                        <input type='text' name='last-name' placeholder="Фамилия" />
                    </div>
                    <div className='col-sm-4'>
                        <h6>Имя<span className='red'>*</span></h6>
                    </div>
                    <div className='col-sm-8'>
                        <input type='text' name='first-name' placeholder="Имя" />
                    </div>
                    <div className='col-sm-4'>
                        <h6>Отчество</h6>
                    </div>
                    <div className='col-sm-8'>
                        <input type='text' name='middle-name' placeholder="Отчество" />
                    </div>
                    <div className='col-sm-4'>
                        <h6>Дата рождения</h6>
                    </div>
                    <div className='col-sm-8'>
                        <input type='date' name='birthdate' />
                    </div>
                    <div className='col-sm-4'>
                        <h6>Адрес электронной почты<span className='red'>*</span></h6>
                    </div>
                    <div className='col-sm-8'>
                        <input type='email' name='email' placeholder='Введите почту'/>
                        <div className='f_08 color-1'>Не показывается в профиле</div>
                    </div>
                    <div className='col-sm-4'>
                        <h6>Номер телефона<span className='red'>*</span></h6>
                    </div>
                    <div className='col-sm-8'>
                        <input type='tel' name='phone' placeholder='+79000000000'/>
                        <div className='f_08 color-1'>Не показывается в профиле</div>
                    </div>
                    <div className='col-sm-4'>
                        <h6>Город<span className='red'>*</span></h6>
                    </div>
                    <div className='col-sm-8'>
                        <input type='text' name='town' placeholder="Город" />
                    </div>
                </div>
                <button type='submit' className='btn_main btn_1 mt-4'>Cохранить</button>
            </form>

            <h6 className="f_11 mb-2 mt-4 mb-sm-3 mt-sm-5">Сменить пароль</h6>
            <form className='acc-box'>
                <div className='row'>
                    <div className='col-sm-8'>
                        <h6>Старый пароль</h6>
                        <input type='password' className='mt-2' name='password' placeholder='Введите старый пароль'/>
                        <h6 className='mt-3'>Новый пароль</h6>
                        <input type='password' className='mt-2' name='password' placeholder='Придумайте новый пароль'/>
                        <h6 className='mt-3'>Повторите пароль</h6>
                        <input type='password' className='mt-2' name='password' placeholder='Повторите пароль'/>
                    </div>
                </div>
                <button type='submit' className='btn_main btn_1 mt-3'>Cохранить</button>
            </form>
        </div>
    );
}