import React from 'react';

export default function NewsMini(props) {
    return (
        <article class={"news-mini " + props.className}>
            <time class="fw_7 mb-1">{props.date}</time>
            <h6><a href={props.url}>{props.title}</a></h6>
        </article>
    );
}