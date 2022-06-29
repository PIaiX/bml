import React from 'react';
import { Link } from 'react-router-dom';

export default function NewsMini(props) {
    return (
        <article className={"news-mini " + props.className}>
            <time className="fw_7 mb-1">{props.date}</time>
            <h6><Link to={props.url}>{props.title}</Link></h6>
        </article>
    );
}