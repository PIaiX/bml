import React, {useState} from 'react';
import { MdStarOutline, MdStar } from "react-icons/md";

export default function BtnFav(props) {
    const [checked, setChecked] = useState(props.check);

    return (
        <button onClick={()=>setChecked((checked)?false:true)} class="btn-fav mr-2 ms-2">
            {
                (checked === true)?
                <MdStar />
                : <MdStarOutline />
            }
        </button>
    );
}