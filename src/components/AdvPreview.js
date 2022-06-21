import React from 'react';
import { MdOutlineMode } from "react-icons/md";
import BtnFav from './utils/BtnFav';

export default function AdvPreview(props) {
    return (
        <div class="preview_small">
            <img src={props.imgURL} alt={props.title}/>
            <div className='text'>
                <div class="layer1">
                    <h6><a href={props.url}>{props.title}</a></h6>
                </div>
                <div class="layer2">
                    <div class="white">
                        <div class="f_08">Инвестиции от</div>
                        <div>{props.summ} руб</div>
                    </div>
                    <div className='d-flex align-items-center'>
                        <BtnFav check={props.fav}/>
                        <button class="btn_main btn_2 p-0 ms-2">
                            <MdOutlineMode />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}