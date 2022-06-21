import React from 'react';

export default function NewsPreview(props) {
    return (
        <article class="news_preview">
            <img src={props.url} alt={props.title} />
            <div class="time">
                <div class="lh_1">15 - 20</div>
                <div class="lh_1 gray">мин</div>
            </div>
            <div class="px-2 py-3">
                <p class="title">{props.title}</p>
                <p class="text pt">{props.text}</p>
                <div class="text-right color-1"><a href="news-page.html" class="td_und f_09 pt">Подробнее</a></div>
            </div>
        </article>
    );
}