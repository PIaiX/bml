import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineArrowBack } from "react-icons/md";

export default function NewAd() {
    const [category, setCategory] = useState('0');

    return (
        <>
            <Link to="/account/my-ads" className='color-1 f_11 fw_5 d-flex align-items-center d-lg-none mb-3 mb-sm-4'><MdOutlineArrowBack /> <span className='ms-2'>Назад</span></Link>
            <div class="acc_box">
                <h4>Новое объявление</h4>
                <form>
                    <fieldset class="row align-items-center mb-5">
                        <div class="col-sm-6 col-lg-4">
                            <div class="fw_7 text-uppercase">Категория</div>
                        </div>
                        <div class="col-sm-6 col-lg-8">
                            <select defaultValue={category} name="category" onClick={(e)=>setCategory(e.target.value)}>
                                <option value="0">Поиск инвесторов</option>
                                <option value="1">Предложения инвесторов</option>
                                <option value="2">Поиск бизнес партнёров</option>
                                <option value="3">Продажа готового бизнеса</option>
                                <option value="4">Франшизы</option>
                            </select>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend class="fw_7 f_10 text-uppercase mb-4">Параметры</legend>

                        <div class="row align-items-center mb-4">
                            <div class="col-sm-6 col-lg-4">
                                <div>{(category==='4') ? 'Название франшизы' : 'Название объявления'}<span className='red'>*</span></div>
                            </div>
                            <div class="col-sm-6 col-lg-8">
                                <input type="text" required={true} placeholder="Например, продажа офисных помещений"/>
                            </div>
                        </div>
                        
                        <div class="row mb-4">
                            <div class="col-sm-6 col-lg-4 pt-2">
                                <div>
                                {
                                    (category==='0' || category==='1' || category==='2')
                                    ? 'Описание объявления'
                                    : (category==='3') ? 'Описание бизнеса'
                                    : 'Описание компании'
                                }
                                    <span className='red'>*</span>
                                </div>
                            </div>
                            <div class="col-sm-6 col-lg-8">
                                <textarea rows="4" required={true} placeholder={
                                    (category==='0' || category==='1' || category==='2')
                                    ? 'Описание объявления'
                                    : (category==='3') ? 'Описание бизнеса'
                                    : 'Описание компании'
                                }></textarea>
                            </div>
                        </div>
                        {
                            (category==='4') &&
                            <>
                                <div class="row mb-4">
                                    <div class="col-sm-6 col-lg-4 pt-2">
                                        <div>Описание франшизы<span className='red'>*</span></div>
                                    </div>
                                    <div class="col-sm-6 col-lg-8">
                                        <textarea rows="4" required={true} placeholder="Описание франшизы"></textarea>
                                    </div>
                                </div>
                                <div class="row mb-4">
                                    <div class="col-sm-6 col-lg-4 pt-2">
                                        <div>Преимущества франшизы</div>
                                    </div>
                                    <div class="col-sm-6 col-lg-8">
                                        <textarea rows="4" placeholder="Преимущества франшизы"></textarea>
                                    </div>
                                </div>
                            </>
                        }
                        <div class="row mb-4">
                            <div class="col-sm-6 col-lg-4 pt-2">
                                <div>
                                {
                                    (category==='0' || category==='2' || category==='4')
                                    ? <>Условия сотрудничества<span className='red'>*</span></>
                                    : (category==='1') ? 'Предполагаемые условия сотрудничества'
                                    : <>Условия продажи<span className='red'>*</span></>
                                }  
                                </div>
                            </div>
                            <div class="col-sm-6 col-lg-8">
                                <textarea rows="4" required={(category==='1') ? false : true} placeholder={
                                    (category==='0' || category==='2' || category==='4')
                                    ? 'Условия сотрудничества'
                                    : (category==='1') ? 'Предполагаемые условия сотрудничества'
                                    : 'Условия продажи'
                                }></textarea>
                            </div>
                        </div>
                        {
                            (category==='0' || category==='2' || category==='3' || category==='4') &&
                            <div class="row mb-4">
                                <div class="col-sm-6 col-lg-4 pt-2">
                                    <div>Бизнес-план{(category==='4') && <span className='red'>*</span>}</div>
                                </div>
                                <div class="col-sm-6 col-lg-8">
                                    <textarea rows="4" required={(category==='4') ? true : false} placeholder="Бизнес-план"></textarea>
                                </div>
                            </div>
                        }
                        {
                            (category==='0' || category==='1' || category==='2') &&
                            <div class="row mb-4">
                                <div class="col-sm-6 col-lg-4 pt-2">
                                    <div>О себе</div>
                                </div>
                                <div class="col-sm-6 col-lg-8">
                                    <textarea rows="4" placeholder="О себе"></textarea>
                                </div>
                            </div>
                        }
                        <div class="row mb-4">
                            <div class="col-sm-6 col-lg-4">
                                <div>Обложка объявления</div>
                                <div class="l-gray f_09 mt-1">Размер 600х400</div>
                            </div>
                            <div class="col-sm-6 col-lg-8">
                                <div className="file-upload">
                                    <button className="btn_main btn_2 fw_4">Загрузить</button>
                                    <input type="file" />
                                </div>
                            </div>
                        </div>
                        <div class="row mb-4">
                            <div class="col-sm-6 col-lg-4">
                                <div>Фотогралерея</div>
                                <div class="l-gray f_09 mt-1">Не более 10</div>
                            </div>
                            <div class="col-sm-6 col-lg-8">
                                <div className="file-upload">
                                    <button className="btn_main btn_2 fw_4">Загрузить</button>
                                    <input type="file" />
                                </div>
                            </div>
                        </div>
                        {
                            (category==='4') &&
                            <div class="row mb-4">
                                <div class="col-sm-6 col-lg-4">
                                    <div>Загрузить видео</div>
                                </div>
                                <div class="col-sm-6 col-lg-8">
                                    <input type="text" placeholder="Вставить ссылку"/>
                                </div>
                            </div>
                        }
                        <div class="row align-items-center mb-4">
                            <div class="col-sm-6 col-lg-4">
                                <div>Город<span className='red'>*</span></div>
                            </div>
                            <div class="col-sm-6 col-lg-8">
                                <input type="text" required={true} placeholder="Город"/>
                            </div>
                        </div>
                        <div class="row align-items-center mb-4">
                            <div class="col-sm-6 col-lg-4">
                                <div>Сфера<span className='red'>*</span></div>
                            </div>
                            <div class="col-sm-6 col-lg-8">
                                <input type="text" required={true} placeholder="Сфера"/>
                            </div>
                        </div>
                        <div class="row align-items-center mb-4">
                            <div class="col-sm-6 col-lg-4">
                                <div>Подраздел<span className='red'>*</span></div>
                            </div>
                            <div class="col-sm-6 col-lg-8">
                                <input type="text" required={true} placeholder="Подраздел"/>
                            </div>
                        </div>
                        {
                            (category==='3') && 
                            <>
                                <div class="row align-items-center mb-4">
                                    <div class="col-sm-6 col-lg-4">
                                        <div>Количество точек<span className='red'>*</span></div>
                                    </div>
                                    <div class="col-sm-6 col-lg-4">
                                        <input type="number" required={true} placeholder="0" class="f_09"/>
                                    </div>
                                </div>
                                <div class="row align-items-center mb-4">
                                    <div class="col-sm-6 col-lg-4">
                                        <div>Стоимость бизнеса<span className='red'>*</span></div>
                                    </div>
                                    <div class="col-sm-6 col-lg-4">
                                        <input type="number" required={true} placeholder="0" class="f_09"/>
                                    </div>
                                </div>
                            </>
                        }
                        {
                            (category==='0' || category==='1' || category==='2' || category==='4') &&
                            <div class="row align-items-center mb-4">
                                <div class="col-sm-6 col-lg-4">
                                    <div>
                                        {
                                            (category==='0' || category==='2')
                                            ? 'Требуемые инвестиции'
                                            : (category==='1') ? 'Возможные инвестиции'
                                            : 'Стартовые инвестиции от'
                                        }
                                        <span className='red'>*</span>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-lg-4">
                                    <input type="number" required={true} placeholder="0" class="f_09 input-price"/>
                                </div>
                            </div>
                        }
                        {
                            (category==='4')&&
                            <>
                                <div class="row align-items-center mb-4">
                                    <div class="col-sm-6 col-lg-4">
                                        <div>Паушальный взнос<span className='red'>*</span></div>
                                    </div>
                                    <div class="col-sm-6 col-lg-4">
                                        <input type="number" required={true} placeholder="0" class="f_09"/>
                                    </div>
                                </div>
                                <div class="row align-items-center mb-4">
                                    <div class="col-sm-6 col-lg-4">
                                        <div>Роялти<span className='red'>*</span></div>
                                    </div>
                                    <div class="col-sm-6 col-lg-4">
                                        <input type="number" required={true} placeholder="0" class="f_09"/>
                                    </div>
                                </div>
                            </>
                        }
                        {
                            (category==='0' || category==='2' || category==='4') &&
                            <div class="row align-items-center mb-4">
                                <div class="col-sm-6 col-lg-4">
                                    <div>Предполагаемая прибыль / мес</div>
                                </div>
                                <div class="col-sm-6 col-lg-4">
                                    <input type="number" placeholder="0" class="f_09 input-price"/>
                                </div>
                            </div>
                        }
                        <div class="row align-items-center mb-4">
                            <div class="col-sm-6 col-lg-4">
                                <div>Окупаемость</div>
                            </div>
                            <div class="col-sm-6 col-lg-8">
                                <input type="text" placeholder="Выберите срок окупаемости"/>
                            </div>
                        </div>
                        {
                            (category==='0' || category==='2') &&
                            <div class="row align-items-center mb-4">
                                <div class="col-sm-6 col-lg-4">
                                    <div>Стадия проекта<span className='red'>*</span></div>
                                </div>
                                <div class="col-sm-6 col-lg-8">
                                    <input type="text" required={true} placeholder="Выберите стадию проекта"/>
                                </div>
                            </div>
                        }
                        {
                            (category==='3') && 
                            <>
                                <div class="row align-items-center mb-4">
                                    <div class="col-sm-6 col-lg-4">
                                        <div>Оборот в месяц</div>
                                    </div>
                                    <div class="col-sm-6 col-lg-4">
                                        <input type="number" placeholder="0" class="f_09"/>
                                    </div>
                                </div>
                                <div class="row align-items-center mb-4">
                                    <div class="col-sm-6 col-lg-4">
                                        <div>Чистая прибыль<span className='red'>*</span></div>
                                    </div>
                                    <div class="col-sm-6 col-lg-4">
                                        <input type="number" required={true} placeholder="0" class="f_09"/>
                                    </div>
                                </div>
                            </>
                        }
                        {
                            (category==='4') && 
                            <>
                                <div class="row align-items-center mb-4">
                                    <div class="col-sm-6 col-lg-4">
                                        <div>Год основания компании</div>
                                    </div>
                                    <div class="col-sm-6 col-lg-4">
                                        <input type="number" placeholder="0" class="f_09"/>
                                    </div>
                                </div>
                                <div class="row align-items-center mb-4">
                                    <div class="col-sm-6 col-lg-4">
                                        <div>Количество собственных точек</div>
                                    </div>
                                    <div class="col-sm-6 col-lg-4">
                                        <input type="number" placeholder="0" class="f_09"/>
                                    </div>
                                </div>
                                <div class="row align-items-center mb-4">
                                    <div class="col-sm-6 col-lg-4">
                                        <div>Количество проданных франшиз</div>
                                    </div>
                                    <div class="col-sm-6 col-lg-4">
                                        <input type="number" placeholder="0" class="f_09"/>
                                    </div>
                                </div>
                            </>
                        }
                    </fieldset>

                    {
                        (category==='4') && 
                        <fieldset>
                            <legend class="fw_7 f_10 text-uppercase mb-4">Размещение объявления на 30 дней</legend>
                            <div class="d-flex">
                                <div class="acc-box">
                                    <label class="mb-3">
                                        <input name="ad-type" type="radio"/>
                                        <span className='ms-3'>Разместить</span>
                                    </label>
                                    <div class="fw_6 sky">3 мес. — 6 000 рублей</div>
                                </div>
                                <div class="acc-box ms-4">
                                    <label class="mb-3">
                                        <input name="ad-type" type="radio"/>
                                        <span className='ms-3'>Большое объявление (пример)</span>
                                    </label>
                                    <div class="fw_6 sky">6 мес. — 11 000 рублей</div>
                                </div>
                                <button type='button' className='btn_main btn_5 ms-4 f_15'>Premium-размещение</button>
                            </div>
                        </fieldset>
                    }
                    <button class="btn_main btn_1 fw_4 mt-4" type="submit">
                        {
                            (category==='4')
                            ? 'Создать и перейти к оплате'
                            : 'Отправить на модерацию'
                        }
                    </button>
                </form>
            </div>
        </>
    );
}