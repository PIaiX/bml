import React, {useState} from 'react';

export default function AdvPrice(props) {
    const [picked, setPicked] = useState(false);

    return (
        <div className={(picked===true)?'ad-price picked':'ad-price'} onClick={()=>setPicked(true)}>
            <img src="/images/photo-replacer.jpg" alt="Заставка"/>
            <div className='text'>
                <h6 className='mt-1 mb-2'>{props.title}</h6>
                {
                    (props.busy===true)
                    ? <div className='red mb-2 mb-sm-3'>Занято до {props.date}</div>
                    : <div className='mb-2 mb-sm-3'>Свободно</div>
                }
                <div className='fw_7'>Стоимость размещения:</div>
                <div className='fw_7'>3 месяца – {props.price3} рублей</div>
                <div className='fw_7'>6 месяцев — {props.price6} рублей</div>
            </div>
            {
                (props.blocked === true) &&
                <div className='blocked'>ЗАБЛОКИРОВАНО</div>
            }
        </div>
    );
}