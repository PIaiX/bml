import React from 'react';

export default function NewsPreview(props) {
    return (
        <article class="news-preview">
            <img src={props.imgUrl} alt={props.title} />
            <div class="time">
                <div class="lh_1">15 - 20</div>
                <div class="lh_1 gray">мин</div>
            </div>
            <div class="px-2 py-3">
                <p class="title">{props.title}</p>
                <p class="text">{props.text}</p>
                <a href={props.url} class="more">Подробнее</a>
            </div>
        </article>
    );
}