import React from 'react';

export default function PartnerCard(props) {
    return (
        <div class="friend-row">
            <div class="d-flex align-items-center flex-1">
                <img src={props.imgURL} alt={props.name}/>
                <div class="flex-1 ps-sm-2">
                    <div class="f_11 color-1 mb-1">{props.name}</div>
                    <div class="f_08">{props.agency}</div>
                </div>
            </div>
            <div class="f_08 fw_4 mt-2 mt-sm-0 d-flex">
                <button class="btn_main btn_4 d-flex">
                    <span>Написать</span>
                    <span className='d-none d-md-inline ms-2'>сообщение</span>
                </button>
                <button type="button" class="btn_main btn_3 d-flex ms-2">
                    <span>Удалить</span>
                    <span className='d-none d-md-inline ms-2'>профиль</span>
                </button>
            </div>
        </div>
    );
}