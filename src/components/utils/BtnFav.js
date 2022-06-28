import React, {useState} from 'react';
import { MdStarOutline, MdStar } from "react-icons/md";

export default function BtnFav(props) {
    const [checked, setChecked] = useState(props.check);

    return (
        <button onClick={()=>setChecked((checked)?false:true)} className={"btn-fav "+props.className}>
            {
                (checked === true)?
                <MdStar />
                : <MdStarOutline />
            }
        </button>
    );
}