import Home from "../pages/Home"
import Contacts from "../pages/Contacts"
import Service from "../pages/Service";
import AdvPage from '../pages/AdvPage';

export const RoutesList = [
    { path: '/', component: Home, breadcrumb: 'Главная' },
    { path: '/contacts', сomponent: Contacts, breadcrumb: 'Контакты' },
    { path: '/service', сomponent: Service, breadcrumb: 'Услуга' },
    { path: '/adv-page', сomponent: AdvPage, breadcrumb: 'Объявление' },
];