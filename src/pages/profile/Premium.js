import React, {useEffect, useState} from 'react';
import {Link, NavLink, useLocation} from 'react-router-dom';
import {MdOutlineArrowBack} from "react-icons/md";
import AdvPrice from './AdvPrice';
import {onImageHandler, onInputHandler, onSelectHandler} from "../../helpers/formHandlers";
import {useImageViewer} from "../../hooks/imageViewer";

const banners = [
    {
        id: 1,

        littleBanner: true, status: 'free',
        name: 'block',
    },
    {
        id: 2,

        littleBanner: true, status: 'zanato',
        name: 'nabor lohov',
    },
    {
        id: 3,

        littleBanner: true, status: 'blocked',
        name: 'lalki',
    },
    {
        id: 4,

        littleBanner: true, status: 'free',
        name: 'block',
    },
    {
        id: 5,

        littleBanner: true, status: 'zanato',
        name: 'nabor lohov',
    },
    {
        id: 6,

        littleBanner: true, status: 'blocked',
        name: 'lalki',
    },
    {
        id: 7,

        littleBanner: true, status: 'free',
        name: 'block',
    },
    {
        id: 8,

        littleBanner: true, status: 'zanato',
        name: 'nabor lohov',
    },
    {
        id: 9,

        littleBanner: true, status: 'blocked',
        name: 'lalki',
    },
    {
        id: 10,
        littleBanner: true,
        status: 'free',
        name: 'block',

    },
    {
        id: 11,
        littleBanner: true,
        status: 'zanato',
        name: 'nabor lohov',
    },
    {
        id: 12,
        littleBanner: true,
        status: 'blocked',
        name: 'lalki',

    },
    {
        id: 13,
        status: 'free',
        name: 'block',
        bigBanner: true,
    },
    {
        id: 14,
        littleBanner: true,
        status: 'zanato',
        name: 'nabor lohov',
    },
    {
        id: 15,
        littleBanner: true,
        status: 'blocked',
        name: 'lalki',
    },
    {
        id: 16,
        littleBanner: true,
        status: 'free',
        name: 'block',
    },
    {
        id: 17,
        littleBanner: true,
        status: 'zanato',
        name: 'nabor lohov',
    },
    {
        id: 18,
        littleBanner: true,
        status: 'blocked',
        name: 'lalki',
    },
    {
        id: 19,
        littleBanner: true,
        status: 'free',
        name: 'block',
    },
    {
        id: 20,
        littleBanner: true,
        status: 'zanato',
        name: 'nabor lohov',
    },
    {
        id: 21,
        littleBanner: true,
        status: 'blocked',
        name: 'lalki',
    },
    {
        id: 22,
        littleBanner: true,
        status: 'free',
        name: 'block',
    },
    {
        id: 23,
        littleBanner: true,
        status: 'zanato',
        name: 'nabor lohov',
    },
    {
        id: 24,
        littleBanner: true,
        status: 'blocked',
        name: 'lalki',
    },
    {
        id: 25,
        littleBanner: true,
        status: 'free',
        name: 'block',

    },
    {
        id: 26,
        status: 'zanato',
        name: 'nabor lohov',
        bigBanner: true,
    },
    {
        id: 27,
        littleBanner: true,
        status: 'blocked',
        name: 'lalki',
    },
    {
        id: 28,
        littleBanner: true,
        status: 'free',
        name: 'block',
    },
    {
        id: 29,
        littleBanner: true,
        status: 'zanato',
        name: 'nabor lohov',
    },
    {
        id: 30,
        littleBanner: true,
        status: 'blocked',
        name: 'lalki',
    },
    {
        id: 31,
        littleBanner: true,
        status: 'free',
        name: 'block',
    },
    {
        id: 32,
        littleBanner: true,
        status: 'zanato',
        name: 'nabor lohov',
    },
    {
        id: 33,
        littleBanner: true,
        status: 'blocked',
        name: 'lalki',
    },
    {
        id: 34,
        littleBanner: true,
        status: 'free',
        name: 'block',
    },
    {
        id: 35,
        littleBanner: true,
        status: 'zanato',
        name: 'nabor lohov',
    },
    {
        id: 36,
        littleBanner: true,
        status: 'blocked',
        name: 'lalki',
    },
    {
        id: 37,
        littleBanner: true,
        status: 'blocked',
        name: 'lalkconst',
    },
    {
        id: 38,
        littleBanner: true,
        status: 'free',
        name: 'top',
    }
]

export default function Premium(props) {

    const loc = useLocation()
    const [data, setData] = useState({})
    const lookBigPicture = useImageViewer(data?.bigBanner)
    const lookLittleBanner = useImageViewer(data?.littleBanner)
    const [idPost, setIdPost] = useState()

    useEffect(() => {
        setData(loc?.state?.data)
    }, [loc])

    const validLittlePhoto = (little) => (little?.width === 250 && little?.height === 160)

    const validBigPhoto = (big) => (big?.width === 1200 && big?.height === 280)

    const currentId = (id) => {
        setIdPost(prevState => prevState !== id ? id : '')
    }

    const filterType = (statusPost, id) => {
        return !(statusPost === 'blocked' || statusPost === 'zanato') && idPost === id
    }

    return (
        <>
            <Link
                to="/account"
                className='color-1 f_11 fw_5 d-flex align-items-center d-lg-none mb-3 mb-sm-4'
            >
                <MdOutlineArrowBack/>
                <span className='ms-2'>Назад</span>
            </Link>
            <div>
                <h4>Премиальное размещение</h4>
                <h6 className='f_11 mb-3'>Описание размещения баннеров и объявлений</h6>
                <p>Задачей размещения баннеров и объявлений является привлечение пользователей, которые уже были на
                    вашем сайте. Часто вы можете встретить рекламу с фотографиями товара, который ранее видели. Но для
                    получения конверсий, используйте баннеры, которые раскрывают главные возможности продукта. Либо
                    напомните пользователю о том, что он забыл оформить заявку или подписаться на вас.</p>
                <div className='row g-2 g-sm-3 mb-4 mb-sm-5'>
                    {banners.map((i) => (
                        <div
                            className={i.bigBanner ? 'col-12' : 'col-6 col-md-4 col-xxl-3'}
                            key={i.id}
                            onClick={() => {
                                currentId(i.id)
                                setData(prevState => ({...prevState, 'placeInSite': i.id}))
                            }}
                        >
                            <AdvPrice
                                id={i.id}
                                title={i.name}
                                price3={'5000'}
                                price6={'7000'}
                                status={i.status}
                                bigBanner={i.bigBanner}
                                littleBanner={i.littleBanner}
                                bigPicture={lookBigPicture.data_url}
                                littlePicture={lookLittleBanner.data_url}
                                selected={filterType(i.status, i.id)}
                            />
                        </div>
                    ))}
                    {/* <div className='col-6 col-md-4 col-xxl-3'>
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
                        <AdvPrice title={"Название места"} price3={'5000'} price6={'7000'} picture={lookBigPicture.data_url || null}/>
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
                    </div>*/}
                </div>

                <div className='row align-items-center g-sm-4'>
                    <div className='col-sm-4 col-xxl-3 mb-2 mb-sm-0'>
                        <div>Изображение</div>
                        <div className='f_09 l-gray mt-1'>Размер баннера 1200*280</div>
                    </div>
                    <div className='col-sm-8 col-xxl-9 mb-3 mb-sm-0'>
                        <div className="file-upload">
                            <button
                                type='button'
                                className="btn_main btn_2 fw_4"
                            >
                                Загрузить
                            </button>
                            <input
                                type="file"
                                onChange={(e) => onImageHandler(e, 'bigBanner', setData)}
                            />
                            {validBigPhoto(lookBigPicture) ? <span>Фото загружено</span> :
                                <span>Размеры не подходят</span>}
                        </div>
                    </div>

                    <div className='col-sm-4 col-xxl-3 mb-2 mb-sm-0'>
                        <div>Изображение</div>
                        <div className='f_09 l-gray mt-1'>Размер баннера 250*160</div>
                    </div>
                    <div className='col-sm-8 col-xxl-9 mb-3 mb-sm-0'>
                        <div className="file-upload">
                            <button
                                type='button'
                                className="btn_main btn_2 fw_4"
                            >
                                Загрузить
                            </button>
                            <input
                                type="file"
                                onChange={e => onImageHandler(e, 'littleBanner', setData)}
                            />
                            {validLittlePhoto(lookLittleBanner) ? <span>Фото загружено</span> :
                                <span>Размеры не подходят</span>}
                        </div>
                    </div>
                    <div className='col-sm-4 col-xxl-3 mb-2 mb-sm-0'>
                        <div>Срок размещения</div>
                    </div>
                    <div className='col-sm-8 col-xxl-9 mb-3 mb-sm-0'>
                        <select
                            defaultValue={0}
                            name='dateLifeAd'
                            onChange={e => onSelectHandler(e, setData, true)}
                        >
                            <option value={0} hidden disabled>Срок размещения</option>
                            <option value={1}>3 месяца – 5 000 ₽</option>
                            <option value={2}>6 месяцев – 7 000 ₽</option>
                        </select>
                    </div>
                    <div className='col-sm-4 col-xxl-3 mb-2 mb-sm-0'>
                        <div>Премиальное размещение</div>
                    </div>
                    <div className='col-sm-8 col-xxl-9 mb-3 mb-sm-0'>
                        <input
                            type='text'
                            name='premiumAdd'
                            onChange={e => onInputHandler(e, setData)}
                        />
                    </div>
                    <div className='col-sm-4 col-xxl-3 mb-2 mb-sm-0'>
                        <div className='f_12 fw_6'>Сумма к оплате</div>
                    </div>
                    <div className='col-sm-8 col-md-4 col-xxl-3 mb-3 mb-sm-0'>
                        <input
                            type='text'
                            name='endSum'
                            className="input-price f_12 fw_6"
                            onChange={e => onInputHandler(e, setData)}
                        />
                    </div>
                </div>
                <button type='button' className="btn_main btn_4 fw_4 mt-sm-5">Создать и перейти к оплате</button>
            </div>
        </>
    );
}