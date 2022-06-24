import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineMode, MdDoubleArrow } from "react-icons/md";
import BtnFav from './utils/BtnFav';

export default function AdvPreview(props) {
    return (
        <div class="preview-small">
            <img src={props.imgURL} alt={props.title}/>
            <div className='text'>
                <div class="layer1">
                    <h6><Link to='/adv-page'>{props.title}</Link></h6>
                </div>
                <div class="layer2">
                    <div class="white d-flex align-items-center d-lg-block">
                        <div class="f_08 me-1 me-sm-3">Инвестиции от</div>
                        <div>{props.summ} руб</div>
                    </div>
                    <div className='d-flex align-items-center'>
                        <BtnFav check={props.fav}/>
                        <Link to='/adv-page' class="d-none d-lg-block btn_main btn_2 p-0 ms-2">
                            <MdDoubleArrow className='d-flex'/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}