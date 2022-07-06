import Home from "../pages/Home"
import Contacts from "../pages/Contacts"
import Service from "../pages/Service";
import AdvPage from '../pages/AdvPage';
import AllNews from '../pages/AllNews';
import News from "../pages/News";
import Entrance from "../pages/profile/Entrance";
import Registration from "../pages/profile/Registration";
import ResetPassword from "../pages/profile/ResetPassword";
import PersonalAccount from "../pages/profile/PersonalAccount";

export const RoutesList = [
    { path: '/', Component: <Home/>, breadcrumb: 'Главная' },
    { path: '/contacts', Component: <Contacts/>, breadcrumb: 'Контакты' },
    { path: '/category', Component: <Service/>, breadcrumb: 'Услуга' },
    { path: '/adv-page', Component: <AdvPage/>, breadcrumb: 'Объявление' },
    { path: '/news', Component: <AllNews/>, breadcrumb: 'Новости и статьи' },
    { path: '/news/news-0', Component: <News/>, breadcrumb: 'Новость' },
    { path: '/enter', Component: <Entrance/>, breadcrumb: 'Вход' },
    { path: '/registration', Component: <Registration/>, breadcrumb: 'Регистрация' },
    { path: '/password-reset', Component: <ResetPassword/>, breadcrumb: 'Сброс пароля' },
    { path: '/account/*', Component: <PersonalAccount/>, breadcrumb: 'Личный аккаунт' },
];