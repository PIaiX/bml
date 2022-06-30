import Home from "../pages/Home"
import Contacts from "../pages/Contacts"
import Service from "../pages/Service";
import AdvPage from '../pages/AdvPage';
import AllNews from '../pages/AllNews';

export const RoutesList = [
    { path: '/', component: Home, breadcrumb: 'Главная' },
    { path: '/contacts', сomponent: Contacts, breadcrumb: 'Контакты' },
    { path: '/category', сomponent: Service, breadcrumb: 'Услуга' },
    { path: '/adv-page', сomponent: AdvPage, breadcrumb: 'Объявление' },
    { path: '/news', сomponent: AllNews, breadcrumb: 'Новости и статьи' },
    { path: '/news/news-0', сomponent: AllNews, breadcrumb: 'Новость' },
];